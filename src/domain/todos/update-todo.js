const { findTodo } = require('./find-todo');

const updateTodo = (user, id, payload) => {
  const { deadline, title } = payload;

  const todo = findTodo(user, id);

  todo.deadline = new Date(deadline);
  todo.title = title;

  return todo
}

module.exports = {
  updateTodo,
};
