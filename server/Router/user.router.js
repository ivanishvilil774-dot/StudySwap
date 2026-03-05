const express = require("express");
const router = express.Router();
const { readFile } = require("../utils/ReadFile");
const { writeFile } = require("../utils/writefile");
const path = require("path");

const dbPath = path.join(__dirname, "../data/data.json");

router.get("/", async (req, res) => {
    try {
        const DB = await readFile(dbPath);
        res.json(DB);
    } catch (error) {
        res.status(500).json({ message: "Error reading user data" });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const DB = await readFile(dbPath);
        const { id } = req.params;
        const user = DB.find((user) => user.id === id);

        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error reading user data" });
    }
});

router.post("/", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const DB = await readFile(dbPath);

        if (!username || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = DB.find((user) => user.email === email);
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const newUser = {
            id: (DB.length + 1).toString(),
            username,
            email,
            password
        };

        DB.push(newUser);

        await writeFile(dbPath, DB);

        res.status(201).json(newUser);

    } catch (error) {
        res.status(500).json({ message: "Error creating user" });
    }
});

module.exports = router;