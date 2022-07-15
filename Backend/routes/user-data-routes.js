const express = require('express');

const isAuth = require('../handlers/is-auth-handler');

const router = express.Router();

router.get('/fav', isAuth);

router.get('/watch-list', isAuth);

module.exports = router;