const mongoose=require("mongoose");
const { title } = require("process");


mongoose.connect('mongodb://localhost:27017/todos')
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
});

const todo=mongoose.model('todos',todoSchema);
module.exports={
    todo
}