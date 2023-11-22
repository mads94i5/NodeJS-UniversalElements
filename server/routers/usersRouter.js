import { Router } from "express";
import { mysqlDB } from "../scripts/mysql.js";
import { isAdmin, isLoggedIn } from "../scripts/auth.js";
import bcrypt from "bcrypt";

const router = Router();

router.get("/api/users", isAdmin, (req, res) => {
    mysqlDB.query("SELECT * FROM users", (err, results) => {
        if (err) {
            console.error("Error fetching users:", err);
            return res.status(500).json({ error: "Error fetching users" });
        }

        const users = results;
        res.json(users);
    });
});

router.get("/api/users/:id", isLoggedIn, (req, res) => {
    const userId = Number(req.params.id);

    if (userId !== req.user.userId && req.user.role !== "admin") {
        return res.status(403).json({ error: "Permission denied" });
    }

    mysqlDB.query("SELECT * FROM users WHERE id = ?", userId, (err, results) => {
        if (err) {
            console.error("Error fetching user:", err);
            return res.status(500).json({ error: "Error fetching user" });
        }

        const user = results[0];
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json(user);
    });
});

router.patch("/api/users/edit/username/:id", isLoggedIn, (req, res) => {
    const userId = Number(req.params.id);
    const { username } = req.body;

    if (userId !== req.user.userId && req.user.role !== "admin") {
        return res.status(403).json({ error: "Permission denied" });
    }

    mysqlDB.query("UPDATE users SET username = ? WHERE id = ?", [username, userId], (err) => {
        if (err) {
            console.error("Error updating username:", err);
            return res.status(500).json({ error: "Username update failed" });
        }

        res.json({ message: "Username updated successfully" });
    });
});

router.patch("/api/users/edit/email/:id", isLoggedIn, (req, res) => {
    const userId = Number(req.params.id);
    const { email } = req.body;

    if (userId !== req.user.userId && req.user.role !== "admin") {
        return res.status(403).json({ error: "Permission denied" });
    }

    mysqlDB.query("UPDATE users SET email = ? WHERE id = ?", [email, userId], (err) => {
        if (err) {
            console.error("Error updating email:", err);
            return res.status(500).json({ error: "Email update failed" });
        }

        res.json({ message: "Email updated successfully" });
    });
});

router.patch("/api/users/edit/password/:id", isLoggedIn, (req, res) => {
    const userId = Number(req.params.id);
    const { password } = req.body;

    if (userId !== req.user.userId && req.user.role !== "admin") {
        return res.status(403).json({ error: "Permission denied" });
    }

    bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
            console.error("Error hashing password:", err);
            return res.status(500).json({ error: "Password update failed" });
        }

        mysqlDB.query("UPDATE users SET password = ? WHERE id = ?", [hashedPassword, userId], (err) => {
            if (err) {
                console.error("Error updating password:", err);
                return res.status(500).json({ error: "Password update failed" });
            }

            res.json({ message: "Password updated successfully" });
        });
    });
});

router.put("/api/users/:id", isAdmin, (req, res) => {
    const userId = Number(req.params.id);
    const updatedUserData = req.body;

    mysqlDB.query("UPDATE users SET ? WHERE id = ?", [updatedUserData, userId], (err, results) => {
        if (err) {
            console.error("Error updating user:", err);
            return res.status(500).json({ error: "Error updating user" });
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json({ message: "User updated successfully" });
    });
});

router.delete("/api/users/:id", isLoggedIn, (req, res) => {
    const userId = Number(req.params.id);

    if (userId !== req.user.userId && req.user.role !== "admin") {
        return res.status(403).json({ error: "Permission denied" });
    }

    mysqlDB.query("DELETE FROM users WHERE id = ?", userId, (err, results) => {
        if (err) {
            console.error("Error deleting user:", err);
            return res.status(500).json({ error: "Error deleting user" });
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({ error: "User not found" });
        }

        res.json({ message: "User deleted successfully" });
    });
});

export default router;