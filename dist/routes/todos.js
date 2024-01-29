"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_1 = __importDefault(require("../models/todo"));
const router = (0, express_1.Router)();
/**
 * Route to get all todos.
 * GET /api/todos
 */
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Fetch all todos from the database
        const todos = yield todo_1.default.find();
        // Respond with the list of todos
        res.json(todos);
    }
    catch (err) {
        // Handle any errors that occur during the fetch operation
        const error = err;
        res.status(500).json({ message: error.message });
    }
}));
/**
 * Route to add a new todo.
 * POST /api/todos
 */
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Extract data from request body
    const { title, description, priority, dueDate } = req.body;
    // Create a new todo object
    const newTodo = new todo_1.default({
        title,
        description,
        priority,
        dueDate
    });
    try {
        // Save the new todo to the database
        const savedTodo = yield newTodo.save();
        // Respond with the newly created todo
        res.status(201).json(savedTodo);
    }
    catch (err) {
        // Handle any errors during saving to the database
        const error = err;
        res.status(400).json({ message: error.message });
    }
}));
/**
 * Route to delete a todo.
 * DELETE /api/todos/:id
 */
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Delete the todo with the given ID
        const todo = yield todo_1.default.findByIdAndDelete(req.params.id);
        if (!todo)
            return res.status(404).send('Todo not found.');
        // Respond with the deleted todo
        res.json(todo);
    }
    catch (err) {
        // Handle any errors during deletion
        const error = err;
        res.status(500).send(error.message);
    }
}));
/**
 * Route to update a todo.
 * PUT /api/todos/:id
 */
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Extract data from request body
        const { title, completed, description, priority, dueDate } = req.body;
        // Update the todo with the given ID
        const todo = yield todo_1.default.findByIdAndUpdate(req.params.id, { title, completed, description, priority, dueDate }, { new: true } // Option to return the updated document
        );
        if (!todo)
            return res.status(404).send('Todo not found.');
        // Respond with the updated todo
        res.json(todo);
    }
    catch (err) {
        // Handle any errors during the update
        const error = err;
        res.status(400).send(error.message);
    }
}));
exports.default = router;
