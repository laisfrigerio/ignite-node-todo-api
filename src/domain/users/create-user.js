const { v4 } = require('uuid');

const checkExistsUsername = (users, username) => {
  return users.find(user => user.username === username);
}

const createUser = (users, payload) => {
  const { name, username } = payload

  if (checkExistsUsername(users, username)) {
    throw new Error('Username already exists');
  }

  const user = {
    id: v4(),
    name,
    username,
    todos: []
  }

  users.push(user)

  return user
}

module.exports = {
  createUser
}
