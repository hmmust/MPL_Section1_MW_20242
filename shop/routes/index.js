const express = require("express");
const router= express.Router();
const indexController = require("../controllers/index");

router.get("/contact",indexController.getContact);
router.get("/",indexController.getIndex);

exports.router= router;