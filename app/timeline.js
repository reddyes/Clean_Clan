//require express
var express = require('express');
var path = require('path');
var User = require('../model/user');
var Post = require('../model/post');
//create our router object
var router = express.Router();

//export our router
module.exports = router;


var auth = function(req, res, next) {
  if (req.session && req.session.email)
    return next();
  else
    return res.redirect('/login');
};

router.get('/',auth,function(req, res,next) {
  res.render('./pages/timeline');
});
