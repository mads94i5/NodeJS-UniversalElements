import "dotenv/config";
import express from "express";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import { authError } from "./scripts/auth.js";
import { corsOptions } from "./scripts/cors.js";
import { endDatabaseConnection } from "./scripts/mysql.js";
import * as rateLimiters from "./scripts/rateLimiters.js";

const app = express();
app.use(helmet())
app.use(cors(corsOptions));
app.use("/auth/login", rateLimiters.auth);
app.use("/auth/register", rateLimiters.auth);
app.use("*", rateLimiters.main);
app.use(authError);
app.use(cookieParser());
app.use(express.json());

import authRouter from "./routers/authRouter.js";
app.use(authRouter);

const PORT = process.env.AUTH_SERVER_PORT || 8081;
const server = app.listen(PORT, (error) => {
    if (error) {
        console.log("Auth server failed to start:", error);
        return;
    }
    console.log("Auth server started at port:", PORT);
});

process.on("unhandledRejection", (reason, promise) => {
    console.error("Unhandled Promise Rejection at:", promise, "reason:", reason);
});

process.on("uncaughtException", (error) => {
    console.error("Uncaught Exception:", error);
});

app.on("close", () => {
    console.log("Server is shutting down. Performing cleanup tasks...");
    endDatabaseConnection();
});

process.on("SIGINT", () => {
    console.log("Received SIGINT. Server is shutting down.");
    endDatabaseConnection();
    server.close(() => {
        console.log("Server is now closed.");
        process.exit(0);
    });
});

process.on("SIGTERM", () => {
    console.log("Received SIGTERM. Server is shutting down.");
    endDatabaseConnection();
    server.close(() => {
        console.log("Server is now closed.");
        process.exit(0);
    });
});