const { findTodo } = require('./find-todo');

const doneTodo = (user, id) => {
  const todo = findTodo(user, id);

  todo.done = true;

  return todo;
}
  
module.exports = {
  doneTodo,
};
