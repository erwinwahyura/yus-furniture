require('dotenv').config()
const express = require('express')
const app = express()
const { connect } = require('mongoose')

app.get('/random', (req, res, next) => {
  res.send('API root')
})

connect(process.env.MONGO_URI, { useNewUrlParser: true }, (err) => {
  err ? console.log(err) : console.log('Database connected')
})

// export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
