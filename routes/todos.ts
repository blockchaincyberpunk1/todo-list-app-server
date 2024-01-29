import { Request, Response, Router } from 'express';
import Todo from '../models/todo';

const router = Router();

/**
 * Route to get all todos.
 * GET /api/todos
 */
router.get('/', async (req: Request, res: Response) => {
    try {
        // Fetch all todos from the database
        const todos = await Todo.find();
        // Respond with the list of todos
        res.json(todos);
    } catch (err) {
        // Handle any errors that occur during the fetch operation
        const error = err as Error;
        res.status(500).json({ message: error.message });
    }
});

/**
 * Route to add a new todo.
 * POST /api/todos
 */
router.post('/', async (req: Request, res: Response) => {
    // Extract data from request body
    const { title, description, priority, dueDate } = req.body;
    // Create a new todo object
    const newTodo = new Todo({
        title,
        description,
        priority,
        dueDate
    });

    try {
        // Save the new todo to the database
        const savedTodo = await newTodo.save();
        // Respond with the newly created todo
        res.status(201).json(savedTodo);
    } catch (err) {
        // Handle any errors during saving to the database
        const error = err as Error;
        res.status(400).json({ message: error.message });
    }
});

/**
 * Route to delete a todo.
 * DELETE /api/todos/:id
 */
router.delete('/:id', async (req: Request, res: Response) => {
    try {
        // Delete the todo with the given ID
        const todo = await Todo.findByIdAndDelete(req.params.id);
        if (!todo) return res.status(404).send('Todo not found.');
        // Respond with the deleted todo
        res.json(todo);
    } catch (err) {
        // Handle any errors during deletion
        const error = err as Error;
        res.status(500).send(error.message);
    }
});

/**
 * Route to update a todo.
 * PUT /api/todos/:id
 */
router.put('/:id', async (req: Request, res: Response) => {
    try {
        // Extract data from request body
        const { title, completed, description, priority, dueDate } = req.body;
        // Update the todo with the given ID
        const todo = await Todo.findByIdAndUpdate(
            req.params.id,
            { title, completed, description, priority, dueDate },
            { new: true }
        );
        if (!todo) return res.status(404).send('Todo not found.');
        // Respond with the updated todo
        res.json(todo);
    } catch (err) {
        // Handle any errors during the update
        const error = err as Error;
        res.status(400).send(error.message);
    }
});

export default router;
