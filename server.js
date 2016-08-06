#!/usr/bin/env node

var async = require('async');
var path = require('path')

var runWatcher = function() {
  var webpack = require('webpack');
  var conf = require('./webpack.config');
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
  var server = path.join(__dirname, 'src', 'server.js');

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
