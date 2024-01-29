"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const todos_1 = __importDefault(require("./routes/todos"));
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables from .env file
dotenv_1.default.config();
// Create an Express application
const app = (0, express_1.default)();
// Apply Middlewares
// Enable CORS (Cross-Origin Resource Sharing) for all requests
app.use((0, cors_1.default)());
// Body parser middleware for parsing JSON payloads
app.use(body_parser_1.default.json());
// Express's built-in middleware for parsing JSON
app.use(express_1.default.json()); // This is redundant if bodyParser.json() is used
// Establish MongoDB Connection
mongoose_1.default.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB:', err));
// Define Routes
// All routes for '/api/todos' are handled in the todosRoutes file
app.use('/api/todos', todos_1.default);
// Error Handling Middleware
// This middleware catches and handles any unhandled errors in the application
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
// Server Port Configuration
// Use the PORT environment variable or default to 5000
const PORT = parseInt(process.env.PORT, 10) || 5000;
// Start the Express server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
