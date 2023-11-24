import express from 'express';
import cors from 'cors';

import { gameRouter } from './routes';

/**
 * Setting up host and port
 */
const host = process.env.HOST ?? 'localhost'; // Host for the server, default is 'localhost'
const port = process.env.PORT ? Number(process.env.PORT) : 3000; // Port for the server, default is 3000

/**
 * Initializing Express application
 */
const app = express();

/**
 * Using necessary middleware
 */
app.use(express.json()); // Middleware to parse JSON bodies
app.use(cors()); // Middleware to enable CORS

/**
 * Setting up routes
 */
app.use('/api', gameRouter); // Use gameRouter for routes starting with '/api'

/**
 * Starting the server
 */
app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`); // Log when the server is ready
});
