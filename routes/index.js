var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Maxiblog' });
});
/* GET post1 page. */
router.get('/post1', function(req, res, next) {
  res.render('post', { title: 'Maxiblog' });
});


module.exports = router;
