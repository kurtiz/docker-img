import {server} from "./app.js";

const port = process.env.PORT || 8080;

/**
 * Starts the server
 */
server.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});