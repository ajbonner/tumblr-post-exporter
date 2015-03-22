var fs = require('fs');
var config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
var TumblrPostExporter = require('./tumblr-post-exporter.js');

var exporter = new TumblrPostExporter(config);

exporter.posts(
  function(errStr) {
    console.log(errStr);
  },  
  function(posts) {
    posts.forEach(function(post) {
      console.log(post);
    });
  }
);

