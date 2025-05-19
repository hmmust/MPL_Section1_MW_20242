const express = require('express');
const router = express.Router();
const authController = require("../controllers/auth");
router.get('/logout',authController.getLogout);
router.get('/login',authController.getLogin);
router.post('/login',authController.postLogin);
module.exports = router;