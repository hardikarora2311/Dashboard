const mongoose = require("mongoose");

const Userschema=new mongoose.Schema({
    Name: {type:String,required:true},
    email: {type:String,required:true,unique:true},
    password: {type:String,required:true},
},{timestamps:true});

export default mongoose.models.data||mongoose.model( "data",Userschema);