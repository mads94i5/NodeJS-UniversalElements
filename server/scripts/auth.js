import jwt from "jsonwebtoken";
import { jwtAccessSecret } from "./jwt.js";

export function authError(err, req, res, next) {
    if (err && err.name && err.name === "UnauthorizedError") {
        return res.status(401).json({ error: "Unauthorized" });
    }
    next();
}

export function isAdmin(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    jwt.verify(token, jwtAccessSecret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        req.user = decoded;
        if (req.user.role === "admin") {
            next();
        } else {
            res.status(403).json({ error: "Permission denied" });
        }
    });
}

export function isLoggedIn(req, res, next) {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    jwt.verify(token, jwtAccessSecret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: "Unauthorized" });
        }
        req.user = decoded;
    });
    next();
}