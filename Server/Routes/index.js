
/*
File Name : index.js
Developers:  
Piraveen Udayakumar – 301102696
Yonas Berhane       – 301165447
Kyeongbin Noh       – 301130132
Ulkar Zakaryayeva   – 301107604 
Halim Yoo           – 301155567
Syeda Maria         - 301184173
 
Date: November 8, 2021
Description: Survey web application that has full CRUD functionality using Express, Node.JS, MongoDB and EJS templating engine.
*/

let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Home' });
  });

/* GET home page. */
router.get('/Home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});


/* GET Survey page. */
router.get('/survey', function(req, res, next) {
  res.render('index', { title: 'Survey' });
});


/* GET View all Survey page. */
router.get('/viewallsurveys', function(req, res, next) {
  res.render('index', { title: 'View Survey' });
});
  
  module.exports = router;
