const mongoose = require('mongoose');

const processedSchema = new mongoose.Schema({
  id: String,
  user: String,
  class: String,
  age: Number,
  email: String,
  inserted_at: Date,
  modified_at: Date
});

module.exports = mongoose.model('ProcessedUser', processedSchema);
