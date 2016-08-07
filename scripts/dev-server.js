#!/usr/bin/env node

var async = require('async');
var path = require('path')
var base = path.join(__dirname, "..");

var runWatcher = function() {
  var webpackConfig = path.join(base, 'webpack.config.js');
  var webpack = require('webpack');
  var conf = require(webpackConfig);
  var compiler = webpack(conf);
  console.log("Starting Webpack watcher");
  compiler.watch(
    {
      aggregateTimeout: 300, // wait so long for more changes
      poll: true
    },
    function(err, stats) {
      if(err) {
        console.log(err);
        return;
      }
      console.log(stats.toString("normal"));
    }
  )
};

var runServer = function() {
  var nodemon = require('nodemon');
  var server = path.join(base, 'src', 'server.js');

  nodemon({
    script: server,
    watch: [server]
  });

  nodemon.on('start', function () {
    console.log('Starting server');
  }).on('quit', function () {
    console.log('Shutting down server');
  }).on('restart', function (files) {
    console.log('Restarting server due to changes: ', files);
  });
};

async.parallel([
  runServer, 
  function() { setTimeout(runWatcher, 2000); }
]);
