import mongoose, { Document, Schema } from 'mongoose';

/**
 * Interface for the Todo model.
 * Extends Mongoose's Document to inherit properties and methods of a document.
 */
interface ITodo extends Document {
    title: string;       // Title of the todo item
    completed: boolean;  // Status to track if the todo is completed
    description?: string;  // Optional description of the todo item
    priority?: string;    // Optional priority of the todo (Low, Medium, High)
    dueDate?: Date;       // Optional due date for the todo item
}

/**
 * Schema definition for the Todo model.
 */
const todoSchema = new Schema<ITodo>({
    title: {
        type: String,
        required: true, // 'title' is a required field
    },
    completed: {
        type: Boolean,
        default: false, // Default value for 'completed' is false
    },
    description: {
        type: String,
        default: '', // Default value for 'description' is an empty string
    },
    priority: {
        type: String,
        default: 'Medium', // Default priority is set to 'Medium'
        // Note: You can enforce this to be one of ['Low', 'Medium', 'High'] using enum
    },
    dueDate: {
        type: Date, // 'dueDate' field to store the due date of the todo item
        // Due date is optional and no default value is set
    }
});

/**
 * Export the Todo model, which will interface with the MongoDB 'todos' collection.
 * 'ITodo' interface is used to provide a type for documents within the collection.
 */
export default mongoose.model<ITodo>('Todo', todoSchema);
