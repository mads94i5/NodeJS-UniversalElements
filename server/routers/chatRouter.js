import { Router } from "express";
import { Server } from "socket.io";
import { corsOptions } from "../scripts/cors.js";

const router = Router();

const initializeChat = (server) => {

    const io = new Server(server, {
        cors: corsOptions,
    });

    io.on("connection", (socket) => {
        console.log("A user connected");
        socket.on("client-message", (msg) => {
            console.log(msg)
            io.emit("server-message", { username: msg.username, text: msg.text });
        });
        socket.on("disconnect", () => {
            if (socket.username) {
                console.log(`User: ${socket.username} disconnected`);
            } else {
                console.log("User disconnected");
            }
        });
    });
    return router;
}

export default initializeChat;