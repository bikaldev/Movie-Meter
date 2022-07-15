const express = require('express');

const requestHandler = require('../handlers/requestHandler');
const searchReqHandler = require('../handlers/searchReqHandler');

const router = express.Router();

router.get('/getMovieDetail/search/:searchBy/:keyword/', searchReqHandler);

router.get('/getMovieDetail/', requestHandler);

module.exports = router;