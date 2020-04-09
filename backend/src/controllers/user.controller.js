const express = require("express");

const userRouter = express.Router()

// define the home page route
userRouter.get('/', function (req, res) {
  res.send('Birds home page')
})
// define the about route
userRouter.get('/about', function (req, res) {
  res.send('About birds')
})

module.exports = userRouter