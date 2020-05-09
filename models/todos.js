const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    
});




const Todos = mongoose.model('todos', todoSchema);


module.exports = Todos;