"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
/**
 * Schema definition for the Todo model.
 */
const todoSchema = new mongoose_1.Schema({
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
exports.default = mongoose_1.default.model('Todo', todoSchema);
