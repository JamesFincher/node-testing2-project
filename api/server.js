const express = require('express')
const { logger, errorHandler } = require('../middleware/global')
const server = express()
const communitiesRouter = require('./communities/router')
const usersRouter = require('./users/router')

server.use(express.json())
server.use(logger)

server.use('/api/communities', communitiesRouter)
server.use('/api/users', usersRouter)

server.use(errorHandler)

module.exports = server