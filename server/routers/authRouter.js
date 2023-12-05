import { Router } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { mysqlDB } from "../scripts/mysql.js";
import { sendEmail } from "../scripts/nodemailer.js";
import * as jwtOptions from "../scripts/jwt.js";

const router = Router();

router.get("/auth/check-auth", (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        return res.json({ error: "Unauthorized" });
    }

    jwt.verify(token, jwtOptions.jwtAccessSecret, (err, decoded) => {
        if (err) {
            return res.json({ error: "Unauthorized" });
        }
        req.user = decoded;

        const user = req.user;
        res.json(user);
    });
});

router.post("/auth/register", (req, res) => {
    const user = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role: "user"
    };

    bcrypt.hash(user.password, 10, (err, hashedPassword) => {
        if (err) {
            console.error("Error hashing password:", err);
            return res.status(500).json({ error: "Registration failed" });
        }
        user.password = hashedPassword;

        mysqlDB.query("SELECT username, email FROM users WHERE username = ? OR email = ?", [user.username, user.email], (err, results) => {
            if (err) {
                console.error("Error checking for duplicate username or email:", err);
                return res.status(500).json({ error: "Registration failed" });
            }

            const usernameInUse = results.some((row) => row.username === user.username);
            const emailInUse = results.some((row) => row.email === user.email);
            if (usernameInUse && emailInUse) {
                return res.status(400).json({ error: "Username and email are already in use" });
            } else if (usernameInUse) {
                return res.status(400).json({ error: "Username is already in use" });
            } else if (emailInUse) {
                return res.status(400).json({ error: "Email is already in use" });
            }

            mysqlDB.query("INSERT INTO users SET ?", user, (err, result) => {
                if (err) {
                    console.error("Error registering user:", err);
                    return res.status(500).json({ error: "Registration failed" });
                }
                sendEmail(user.email, "Registered user", "You have successfully registered a user with the login template website.");
                const token = jwt.sign({ userId: result.insertId, role: user.role }, jwtOptions.jwtAccessSecret, { expiresIn: "15s" });
                res.json({ token });
            });
        });
    });
});

router.post("/auth/login", (req, res) => {
    const { username, password } = req.body;

    mysqlDB.query("SELECT * FROM users WHERE username = ?", username, (err, results) => {
        if (err) {
            console.error("Error checking user:", err);
            return res.status(500).json({ error: "Login failed" });
        }

        const user = results[0];
        if (!user) {
            return res.status(401).json({ error: "Invalid username" });
        }

        bcrypt.compare(password, user.password, (err, passwordMatch) => {
            if (err || !passwordMatch) {
                return res.status(401).json({ error: "Invalid credentials" });
            }

            const accessToken = jwt.sign({ userId: user.id, role: user.role }, jwtOptions.jwtAccessSecret, { expiresIn: "15s" });

            const refreshToken = jwt.sign({ userId: user.id, role: user.role }, jwtOptions.jwtRefreshSecret);
            
            mysqlDB.query("UPDATE users SET refreshToken = ? WHERE id = ?", [refreshToken, user.id], (err) => {
                if (err) {
                    console.error("Error storing refresh token:", err);
                    return res.status(500).json({ error: "Login failed" });
                }
                res.cookie("token", accessToken, jwtOptions.jwtCookieOptions);
                res.cookie("refreshToken", refreshToken, jwtOptions.jwtCookieOptions);
                res.json({ message: "Login successful" });
            });
        });
    });
});

router.post("/auth/refresh", (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
        return res.status(401).json({ error: "No refresh token provided" });
    }

    jwt.verify(refreshToken, jwtOptions.jwtRefreshSecret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: "Invalid refresh token" });
        }

        const accessToken = req.cookies.token;

        if (accessToken) {
            jwt.verify(accessToken, jwtOptions.jwtAccessSecret, (err) => {
                if (err) {
                    mysqlDB.query("SELECT refreshToken FROM users WHERE id = ? AND refreshToken = ?", [decoded.userId, refreshToken], (err, results) => {
                        if (err) {
                            if (err.code === 'PROTOCOL_CONNECTION_LOST') {
                                mysqlDB.connect((connectionErr) => {
                                    if (connectionErr) {
                                        console.error("Error reconnecting to the database:", connectionErr);
                                    } else {
                                        console.log("Reconnected to the database.");
                                    }
                                });
                            } else {
                                console.error("Error checking refresh token in the database:", err);
                                return res.status(500).json({ error: "Database error" });
                            }
                        }

                        if (results.length > 0) {
                            const newAccessToken = jwt.sign({ userId: decoded.userId, role: decoded.role }, jwtOptions.jwtAccessSecret, { expiresIn: "15s" });
                            res.cookie("token", newAccessToken, jwtOptions.jwtCookieOptions);
                            res.json({ message: "Access token refreshed" });
                        } else {
                            return res.status(401).json({ error: "Refresh token not found in the database" });
                        }
                    });
                } else {
                    res.json({ message: "Access token is still valid" });
                }
            });
        } else {
            return res.status(401).json({ error: "No access token provided" });
        }
    });
});

router.post("/auth/logout", (req, res) => {
    res.clearCookie("token");
    const refreshToken = req.cookies.refreshToken;
    if (refreshToken) {
        mysqlDB.query("UPDATE users SET refreshToken = NULL WHERE refreshToken = ?", [refreshToken], (err) => {
            if (err) {
                console.error("Error deleting refresh token:", err);
            }
        });
    }
    res.clearCookie("refreshToken");
    res.json({ message: "Logged out successfully" });
});

export default router;