const express= require('express');
const mongoose= require('mongoose');

const Shirt= require('../models/shirtdata.js');

const router= express.Router();

const getShirts= async(request, response) => {
    try{
        const shirt= await Shirt.find();
        response.status(200).json(shirt);    
    } catch(error) {
        response.status(404).json({message: error.message});
    }
}

module.exports.getShirts=getShirts;