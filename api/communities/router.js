const express = require('express')
const router = express.Router()
const Communities = require('./model')

router.get('/', async (req, res) => {
  const communities = await Communities.getCommunities()
  res.json(communities)
})

router.get('/:id', async (req, res) => {
  const community = await Communities.getCommunityById(req.params.id) 
  res.json(community)
})

module.exports = router