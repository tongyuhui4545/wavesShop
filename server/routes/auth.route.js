const express = require("express");
const authController = require("../controllers/auth.controller")
const router = express.Router();

// /api/auth/
router.post("/register", authController.hello)

module.exports = router;