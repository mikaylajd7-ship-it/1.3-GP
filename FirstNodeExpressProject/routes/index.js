var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var places = [
    { name: 'Walt Disney World, Florida', rating: 10 },
    { name: 'Virginia Beach, Virginia', rating: 9 },
    { name: 'New York City, New York', rating: 8 },
    { name: 'San Diego, California', rating: 9 },
    { name: 'Tokyo, Japan', rating: 10 }
  ];

  // Display the student's name on the home page.
  var myname = 'Mikayla Dickerson';

  res.render('index', {
    title: 'Favorite Places',
    places: places,
    myname: myname
  });
});

module.exports = router;
