const mongoose = require("mongoose");

// connection url
async function cn() {
  mongoose.connect("url");
}

run();

// Define schema
const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  isCompleted: Boolean,
});

// Create and export the model
const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
