const knex = require('knex')

const config = require('../knexfile.js')
require('dotenv').config()

// const environment = process.env.NODE_ENV || 'testing'
const environment = 'testing'

const db = knex(config[environment])

module.exports = db