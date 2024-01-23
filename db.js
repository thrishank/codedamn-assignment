const mongoose = require("mongoose");

// connection url

// Define schema
const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  isCompleted: Boolean,
});

// Create and export the model
const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
