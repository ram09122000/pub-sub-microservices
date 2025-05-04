const { v4: uuidv4 } = require('uuid');
const Joi = require('joi');
const User = require('../models/userModel');
const redisClient = require('../config/redisClient');

const schema = Joi.object({
  user: Joi.string().required(),
  class: Joi.string().required(),
  age: Joi.number().integer().required(),
  email: Joi.string().email().required()
});

exports.receiveData = async (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  const data = {
    id: uuidv4(),
    ...req.body,
    inserted_at: new Date()
  };

  try {
    const saved = await User.create(data);
    await redisClient.publish('user_created', JSON.stringify(data));
    res.status(201).json({ message: 'Data received and published', data: saved });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
