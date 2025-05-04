const { createClient } = require('redis');
const client = createClient({
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
  }
});
console.log('redis connected (listener)');

client.connect().catch(console.error);
module.exports = client;
