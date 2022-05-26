const router = require('express').Router()
const Users = require('./model')

router.get('/', async (req, res) => {
  const users = await Users.getUsers()
  res.json(users)
})

router.get('/:id', async (req, res) => {
  const user = await Users.getUserById(req.params.id)
  res.json(user)
})

module.exports = router
