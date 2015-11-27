var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cordobes' });
});
/* GET grafitti page. */
router.get('/habitaciones', function(req, res, next) {
  res.render('habitaciones', { title: 'Cordobes' });
});


module.exports = router;
