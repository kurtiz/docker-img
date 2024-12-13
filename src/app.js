/**
 * Imports necessary modules for the Express application.
 * @module App
 */
import express from 'express';
import http, {Server} from 'http';
import bodyParser from 'body-parser';
import compression from 'compression';
import router from "./routes/router.js";


/**
 * Creates an instance of the Express application.
 *
 * @type {Express}
 */
const app = express();

/**
 * Compresses response bodies to reduce network traffic and improve performance.
 */
app.use(compression());


/**
 * Parses incoming request bodies as JSON.
 */
app.use(bodyParser.json());


/**
 * Creates an instance of the http server
 * @type {Server}
 */
const server = http.createServer(app);

/**
 * Uses the registered routes in the router
 */
app.use(router);

export {app, server};
