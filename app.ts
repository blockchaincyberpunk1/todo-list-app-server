import express, { Express, Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import todosRoutes from './routes/todos';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Create an Express application
const app: Express = express();

// Apply Middlewares
// Enable CORS (Cross-Origin Resource Sharing) for all requests
app.use(cors());
// Body parser middleware for parsing JSON payloads
app.use(bodyParser.json());
// Express's built-in middleware for parsing JSON
app.use(express.json()); // This is redundant if bodyParser.json() is used

// Establish MongoDB Connection
mongoose.connect(process.env.MONGODB_URI as string)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB:', err));

// Define Routes
// All routes for '/api/todos' are handled in the todosRoutes file
app.use('/api/todos', todosRoutes);

// Error Handling Middleware
// This middleware catches and handles any unhandled errors in the application
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Server Port Configuration
// Use the PORT environment variable or default to 5000
const PORT: number = parseInt(process.env.PORT as string, 10) || 5000;

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
