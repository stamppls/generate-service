const express = require('express');
const router = express.Router();

const getUser = require('../../controller/User/getUser');

router.get('/getuser', getUser);

module.exports = router;