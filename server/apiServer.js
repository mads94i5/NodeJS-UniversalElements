import "dotenv/config";
import express from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import cors from "cors";
import { corsOptions } from "./scripts/cors.js";
import { endDatabaseConnection } from "./scripts/mysql.js";
import * as rateLimiters from "./scripts/rateLimiters.js";

const app = express();
app.use(helmet())
app.use(cors(corsOptions));
app.use("*", rateLimiters.main);
app.use(cookieParser());
app.use(express.json());

import elementsRouter from "./routers/elementsRouter.js";
app.use(elementsRouter);

import usersRouter from "./routers/usersRouter.js";
app.use(usersRouter);

import http from "http";
const server = http.createServer(app);

import initializeChat from "./routers/chatRouter.js";
app.use(initializeChat(server));

const PORT = process.env.API_SERVER_PORT || 8080;
server.listen(PORT, (error) => {
    if (error) {
        console.log("API server failed to start:", error);
        return;
    }
    console.log("API server started at port:", PORT);
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