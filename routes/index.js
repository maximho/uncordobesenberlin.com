var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cordobes' });
});
/* GET grafitti page. */
router.get('/graffiti', function(req, res, next) {
  res.render('graffiti', { title: 'Cordobes' });
});


module.exports = router;
