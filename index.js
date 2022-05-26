const server = require('./api/server')
require('dotenv').config()
const PORT = process.env.PORT || 7000

server.listen(PORT, () => {
  console.log(`Clay's server is upa nd running on port ${PORT}`)
})