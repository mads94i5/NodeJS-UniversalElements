import { Router } from "express";
import mongoDB from "../scripts/mongodb.js";
import { isAdmin } from "../scripts/auth.js";
import { parseElementData } from "../scripts/parse.js";

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

router.post("/api/elements", isAdmin, async (req, res) => {
    const newElement = req.body;
    const elements = await mongoDB.elements.find().toArray();
    const parsedElement = parseElementData(newElement, elements);
    try {
        const result = await mongoDB.elements.insertOne(parsedElement);
        if (result.acknowledged === true) {
            res.status(201).json({ message: "Element created successfully" });
        } else {
            res.status(500).json({ error: "Error creating element" });
        }
    } catch (error) {
        res.status(500).json({ error: "Caught: Error creating element" });
    }
});

router.put("/api/elements/:id", isAdmin, async (req, res) => {
    const elementId = Number(req.params.id);
    const updates = req.body;
    const elements = await mongoDB.elements.find().toArray();
    const parsedElement = parseElementData(updates, elements);
    try {
        const result = await mongoDB.elements.updateOne(
            { atomicNumber: elementId },
            { $set: parsedElement }
        );
        if (result.modifiedCount === 0) {
            return res.status(404).json({ error: "Element not found" });
        }
        res.json({ message: "Element updated successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error updating element" });
    }
});

router.delete("/api/elements/:id", isAdmin, async (req, res) => {
    const elementId = Number(req.params.id);
    try {
        const result = await mongoDB.elements.deleteOne({ atomicNumber: elementId });
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: "Element not found" });
        }
        res.json({ message: "Element deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting element" });
    }
});

export default router;