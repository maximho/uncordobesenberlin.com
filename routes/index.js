var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cordobes' });
});
/* GET post1 page. */
router.get('/post1', function(req, res, next) {
  res.render('post', { title: 'Cordobes' });
});


module.exports = router;
