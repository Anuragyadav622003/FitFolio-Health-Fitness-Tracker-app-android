const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    task: { type: String, required: true },
    dueDate: { type: String },
    dueTime: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
  });
  
  const todos = mongoose.model('todos', todoSchema);
  module.exports = todos;