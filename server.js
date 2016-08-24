#!/usr/bin/env node

var async = require('async');
var path = require('path');

var timestamp = function() {
  var ts = new Date().toISOString();
  return "[" + ts + "]";
}

var runWatcher = function() {
  var webpack = require('webpack');
  var conf = require('./webpack.config');
  var compiler = webpack(conf);

  console.log(timestamp(), "Starting Webpack watcher");
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
  var serverStarter = path.join(__dirname, 'src', 'server-starter.js');
  var httpServer = path.join(__dirname, 'src', 'httpServer.js');

  nodemon({
    script: serverStarter,
    watch: [serverStarter, httpServer]
  });

  nodemon.on('start', function () {
    console.log(timestamp(), 'Starting server');
  }).on('quit', function () {
    console.log(timestamp(), 'Shutting down server');
  }).on('restart', function (files) {
    console.log(timestamp(), 'Restarting server due to changes: ', files);
  });
};

async.parallel([
  runServer, 
  function() { setTimeout(runWatcher, 2000); }
]);
