const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  user: String,
  class: String,
  age: Number,
  email: String,
  inserted_at: Date
});

module.exports = mongoose.model('RawUser', userSchema);
