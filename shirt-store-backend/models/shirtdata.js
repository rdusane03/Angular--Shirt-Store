const mongoose =require('mongoose');

const shirtSchema= mongoose.Schema({
    id:{
        type: Number,
        required: true
    },
    colour:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    size:{
        type: String,
        required: true,
    },
    picture:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
     quantity:{
        type: Number,
        required: true,
    }
})

var shirtdata= mongoose.model('shirts', shirtSchema);
module.exports=shirtdata;