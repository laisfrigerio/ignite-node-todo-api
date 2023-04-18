const { v4 } = require("uuid");

const createTodo = (user, payload) => {
  const { deadline, title } = payload;

  const todo = {
    id: v4(),
    title,
    done: false,
    deadline: new Date(deadline),
    created_at: new Date(),
  };

  user.todos.push(todo);

  return todo;
};

module.exports = {
  createTodo,
};
