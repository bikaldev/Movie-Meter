const express = require('express');

const signupHandler = require('../auth-handlers/signup-handler');
const loginHandler = require('../auth-handlers/login-handler');


const router = express.Router();

router.post('/login', loginHandler);

router.post('/signup', signupHandler);

module.exports = router;