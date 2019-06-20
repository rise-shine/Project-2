
html = require('./html-routes')
var router = require('express').Router();

router.use('/', html)

module.exports = router