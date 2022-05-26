const db = require('../../data/dbConfig')

const getUsers = () => {
  return db('users')
}

const getUserById = id => {
  return db('users')
    .where('id', id)
    .first()
}

module.exports = {
  getUsers,
  getUserById
}