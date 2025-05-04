const express = require('express');
const router = express.Router();
const { receiveData } = require('../controllers/receiverController');

router.post('/', receiveData);

module.exports = router;
