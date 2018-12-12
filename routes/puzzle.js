var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Puzzle = require('../models/Puzzle.js');
var passport = require('passport');
var User = require("../models/user");
require('../config/passport')(passport);

/* GET ALL BOOKS */
// router.get('/', passport.authenticate('jwt', { session: false}), function(req, res) {
//   var token = getToken(req.headers);
//   if (token) {
//     console.log(request.user);
//     res.json({"a":"aaa"});
//     //  Puzzle.find(function (err, books) {
//     //   if (err) return next(err); res.json(books);
//     // });
//   } else {
//     return res.status(403).send({success: false, msg: 'Unauthorized.'});
//   }
// });
router.post('/updateScore', passport.authenticate('jwt', { session: false}), function(req, res) {
  var token = getToken(req.headers);
  if (token) {

    if(req.body.game == "scrabble"){
      console.log(token);
      console.log(req.user.username);
    User.findOneAndUpdate({
      username: req.user.username
    },{$set: { "scrabbleInfo" : {level:8} }}
    
    );
  }} 
});

/* SAVE BOOK */
router.post('/', passport.authenticate('jwt', { session: false}), function(req, res) {
  var token = getToken(req.headers);
  if (token) {
      console.log(token);
      console.log(req.user);
      res.json({"username": req.user.username})
  } else {
    return res.status(403).send({success: false, msg: 'Unauthorized.'});
  }
});
getToken = function (headers) {
  if (headers && headers.authorization) {
    var parted = headers.authorization.split(' ');
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};
module.exports = router;