const express = require('express');
const router = express.Router();

const homeRouter = require('./home');
const searchRouter = require('./search');

const searchToLowerCaseMiddleware = require('./middleware/searchToLowerCase');
const searchToUpperCaseMiddleware = require('./middleware/searchToUpperCase');

router.use(homeRouter);
router.use("/search", searchToUpperCaseMiddleware, searchRouter);

module.exports = router;