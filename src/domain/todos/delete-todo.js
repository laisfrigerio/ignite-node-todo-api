const { findTodo } = require("./find-todo");

const deleteTodo = (user, id) => {
  findTodo(user, id);
  const todos = user.todos.filter((currentTodo) => currentTodo.id !== id);
  user.todos = todos;
  return user;
};

module.exports = {
  deleteTodo,
};
