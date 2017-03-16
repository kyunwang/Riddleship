const express = require('express');
const router = express.Router();

// no need to set the path because it is set in app.js as app.use
//
// router.get('/', function(req, res) {
//   res.locals.loggedIn = false;
//   res.locals.admin = false;
//
//   res.render('login/login');
// });


router.get('/meet', (req, res) => {
  res.render('user/meet');
});

router.get('/meet_random', (req, res) => {
  res.render('user/meet_random');
});


router.get('/riddle', (req, res) => {
  res.render('user/riddle');
});

router.get('/riddle_game', (req, res) => {
  res.render('user/riddle_game');
});



module.exports = router;