const findTodo = (user, id) => {
  const todo = user.todos.find(currentTodo => currentTodo.id === id);
  
  if (!todo) {
    throw new Error('Todo not found');
  }

  return todo
}
  
module.exports = {
  findTodo,
};
