const express = require("express");

const authRouter = express.Router()

// define the home page route
authRouter.get('/', function (req, res) {
  res.send('Birds home page')
})
// define the about route
authRouter.get('/about', function (req, res) {
  res.send('About birds')
})

module.exports = authRouter