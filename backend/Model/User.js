//import mongoose from "mongoose";
const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    
    usertype:{
        type: String,
        require: true,
    },
    username:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    phoneno:{
        type: Number,
        require: true,
    },
    password:{
        type: String,
        require: true,
    },
},
{
    timestamps: true
})

const User = mongoose.model('users', userSchema);
module.exports = User;