const express = require("express");
const router = express.Router();

const user_controller = require("../controllers/user.controller");

router.post("/create", user_controller.createUser);

router.get("/all", user_controller.getAllUsers);

router.get("/:id", user_controller.getUser);

module.exports = router;