const express = require('express');
const router = express.Router();
const {getLogin} = require('../Controllers/auth');
router.get('/login', getLogin);

module.exports = router;