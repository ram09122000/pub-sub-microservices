const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/receiver', require('./routes/receiverRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Receiver service running on port ${PORT}`));
