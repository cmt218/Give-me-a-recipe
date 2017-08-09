var express = require('express');
var router = express.Router();
var fs = require('fs');

var vd = require('../videodata.json');

var request = require('request');

//request('http://www.recipepuppy.com/api/?i=bread').pipe(fs.createWriteStream('./recipedata.json'));
var recipe = require('../recipedata.json');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', name: 'Cole', viddata: vd, recipedata: recipe });
});

module.exports = router;
