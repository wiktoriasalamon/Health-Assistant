const express = require("express");

const resultRouter = express.Router()

// define the home page route
resultRouter.get('/', function (req, res) {
  res.send('Birds home page')
})
// define the about route
resultRouter.get('/about', function (req, res) {
  res.send('About birds')
})

module.exports = resultRouter