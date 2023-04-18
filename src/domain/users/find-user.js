const findUser = (users, username) => {
  const user = users.find(user => user.username === username);

  if (!user) {
    throw new Error('User not found');
  }

  return user;
}

module.exports = {
    findUser,
};
