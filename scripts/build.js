#!/usr/bin/env node

var async = require('async');
var path = require('path');

/* Project root directory */
var base = path.join(__dirname, "..");

var timestamp = function() {
  var ts = new Date().toISOString();
  return "[" + ts + "]";
}

var build = function() {
  var webpack = require('webpack');
  var conf = require(base + '/webpack.config');
  var compiler = webpack(conf);

  compiler.run(
    function(err, stats) {
      if(err) {
        console.log(err);
        return;
      }
      console.log(stats.toString("normal"));
      console.log(timestamp(), "BUILD SUCCESS");
    }
  ); 
}

console.log(timestamp(), "BUILDING PROJECT");
build();
