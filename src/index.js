const express = require("express");
const cors = require("cors");

const { createUser } = require("./domain/users/create-user");
const { findUser } = require("./domain/users/find-user");

const { createTodo } = require("./domain/todos/create-todo");
const { deleteTodo } = require("./domain/todos/delete-todo");
const { doneTodo } = require("./domain/todos/done-todo");
const { updateTodo } = require("./domain/todos/update-todo");

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checksExistsUserAccount(request, response, next) {
  try {
    const { username } = request.headers;

    const user = findUser(users, username);

    request.user = user;

    next();
  } catch (error) {
    return response.status(404).json({ message: "User not found" });
  }
}

app.post("/users", (request, response) => {
  try {
    const payload = request.body;

    const user = createUser(users, payload);

    return response.status(201).json({ ...user });
  } catch (error) {
    return response.status(400).json({ error: "Username already exists" });
  }
});

app.get("/todos", checksExistsUserAccount, (request, response) => {
  const { user } = request;

  return response.status(200).json(user.todos);
});

app.post("/todos", checksExistsUserAccount, (request, response) => {
  const { user } = request;

  const payload = request.body;

  const todo = createTodo(user, payload);

  return response.status(201).json({ ...todo });
});

app.put("/todos/:id", checksExistsUserAccount, (request, response) => {
  try {
    const { user } = request;

    const { id } = request.params;

    const payload = request.body;

    const todo = updateTodo(user, id, payload);

    return response.status(200).json({ ...todo });
  } catch (error) {
    return response.status(404).json({ error: "Todo not found" });
  }
});

app.patch("/todos/:id/done", checksExistsUserAccount, (request, response) => {
  try {
    const { user } = request;

    const { id } = request.params;

    const todo = doneTodo(user, id);

    return response.status(200).json({ ...todo });
  } catch (error) {
    return response.status(404).json({ error: "Todo not found" });
  }
});

app.delete("/todos/:id", checksExistsUserAccount, (request, response) => {
  try {
    const { user } = request;

    const { id } = request.params;

    deleteTodo(user, id);

    return response.status(204).send();
  } catch (error) {
    return response.status(404).json({ error: "Todo not found" });
  }
});

module.exports = app;
