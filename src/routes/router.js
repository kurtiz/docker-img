import { Router } from "express";

/**
 * Main Router
 * @type {Router}
 */
const router = Router();


// home route just to show the site is working
router.get("/", (request, response) => {
    response.send(
        "<h1>Mini Server is Live</h1> <br>" +
        "<h2>Version: 1.0.0</h2><br>" +
        "<h3>Author: Aaron Will Djaba</h3>");
});


router.get("/users", (request, response) => {
    response.json({
        users: [
            {
                id: 1,
                name: "John Doe"
            },
            {
                id: 2,
                name: "Jane Doe"
            },
            {
                id: 3,
                name: "John Doe"
            },
        ]
    });
});


router.get("*", (request, response) => {
    response.status(404).json({ error: "Route not found" });
});

export default router;