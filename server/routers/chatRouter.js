import { Router } from "express";
import { Server } from "socket.io";
import { corsOptions } from "../scripts/cors.js";

const router = Router();

const initializeChat = (server) => {
    const io = new Server(server, {
        cors: corsOptions,
    });

    io.on("connection", (socket) => {
        socket.on("client-message", (msg) => {
            io.emit("server-message", { username: msg.username, text: msg.text });
        });
    });
    return router;
}

export default initializeChat;
