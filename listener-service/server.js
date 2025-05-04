const dotenv = require('dotenv');
const connectDB = require('./config/db');
const redisClient = require('./config/redisClient');
const ProcessedUser = require('./models/processedUserModel');

dotenv.config();
connectDB();

async function startListener() {
  await redisClient.subscribe('user_created', async (message) => {
    try {
      const data = JSON.parse(message);
      const modified = {
        ...data,
        modified_at: new Date()
      };
      await ProcessedUser.create(modified);
      console.log('Processed user saved:', modified.email);
    } catch (err) {
      console.error('Failed to process message:', err.message);
    }
  });

  console.log('Listener subscribed to user_created');
}

startListener();
