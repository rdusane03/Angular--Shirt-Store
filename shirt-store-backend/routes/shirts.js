const { Router } = require("express");
const express= require("express")

const shirt_routes= require("../controllers/shirtcontroller");

const router= express.Router();

router.get('/', shirt_routes.getShirts);

module.exports=router;