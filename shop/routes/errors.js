const express=require('express');
const router=express.Router();

const errorController= require('../controllers/errors');
router.all("*",errorController.error404);

module.exports= router;
