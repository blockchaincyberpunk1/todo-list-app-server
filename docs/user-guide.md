# Backend User Guide for Todo List App

## Introduction

This guide is intended for developers and administrators working with the backend of the Todo List App. Our backend is built on Node.js and Express, providing robust APIs to manage todo items.

## Setting Up the Backend

**Prerequisites**
   - Node.js installed on your system.
   - MongoDB installed and running.

**Installation**

1. **Clone the Repository**: Clone the backend repository to your local machine. git clone https://github.com/blockchaincyberpunk1/todo-list-app.git
2. **Navigate to the Backend Directory**:cd server
3. **Install Dependencies**: npm install
4. **Environment Variables**: Set up your .env file with the required environment variables (e.g., MongoDB URI, Port). 
5. **Start the Server**: npm start 

## API Endpoints

1. **Get Todos: GET /api/todos**: Retrieve a list of all todo items.
2. **Add Todo: POST /api/todos**: Add a new todo item.
3. **Update Todo: PUT /api/todos/:id**: Update an existing todo item.
4. **Delete Todo: DELETE /api/todos/:id**: Delete a todo item.


## Working with the API

1. **Adding a Todo**: 
   1. Send a POST request to /api/todos with the todo data in JSON format.
   2. Required fields: title.
   3. Optional fields: description, priority, dueDate.
2. **Updating a Todo**: 
   1. Send a PUT request to /api/todos/:id with the updated data.
   2. The :id in the URL is the unique identifier of the todo item.
3. **Deleting a Todo**: 
   1. Send a DELETE request to /api/todos/:id.
   2. The :id in the URL is the unique identifier of the todo item to be deleted.

## Error Handling

1. The API returns appropriate HTTP status codes for successful and erroneous requests.
2. Check for error messages in the response body for details on what went wrong.

## Logging

1. The backend logs important events and errors, which can be found in the log files under the logs directory.

## Security

1. Ensure that your MongoDB instance is secured.
2. Avoid exposing sensitive information in error messages or logs.

## Support

For any assistance or to report issues, please contact our support team at svolcov.blockchaindeveloper@gmail.com.

Thank you for using the Todo List App Backend! 
