const express = require('express');
const router = express.Router();


// post is used to send the data
// get we used to read the data
const userLogin = require('../routers2ndMethod/controller/authCon');

router.post('/',userLogin)

module.exports = router;