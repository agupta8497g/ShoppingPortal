var express = require('express');
var router = express.Router();

/* GET login Page. */
router.get('/login', function(req, res, next) {
    res.render('login', {title: 'login page'});
});

module.exports = router;