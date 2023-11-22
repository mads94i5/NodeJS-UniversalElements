import { Router } from "express";
import mongoDB from "../scripts/mongodb.js";
// import { isAdmin } from "../scripts/auth.js";

const router = Router();

router.get("/api/elements", async (req, res) => {
    const elements = await mongoDB.elements.find().toArray();
    if (!elements) {
        return res.status(500).json({ error: "Error fetching elements" });
    }
    res.json(elements);
});

router.get("/api/elements/:id", async (req, res) => {
    const elementId = Number(req.params.id);
    const elements = await mongoDB.elements.find({ atomicNumber: elementId }).toArray();
    if (!elements) {
        return res.status(500).json({ error: "Error fetching elements" });
    }
    res.json(elements);
});

export default router;