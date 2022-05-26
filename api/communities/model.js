const db = require('../../data/dbConfig')

const getCommunities = () => {
  return db('communities')
}

const getCommunityById = id => {
  return db('communities')
    .where('id', id)
    .first()
}

module.exports = {
  getCommunities,
  getCommunityById
}