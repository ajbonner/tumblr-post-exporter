var fs = require('fs');
var config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
var TumblrPostExporter = require('./tumblr-post-exporter.js');

var exporter = new TumblrPostExporter(config);

var totalPostCount = 0;
var postBox = [];
var pageSize = 20;

var errHandler = function(errStr) {
  console.log(errStr);
};  

var postHandler = function(posts) {
  postBox = postBox.concat(posts);
  if (postBox.length == totalPostCount) {
    console.log(JSON.stringify(postBox));
  }
};

var getPage = function(pageNum) { 
  setTimeout(function() { 
    exporter.posts(
      pageNum * pageSize,
      pageSize,
      errHandler,
      postHandler
    );
  }, pageNum * 500);
};

exporter.numPosts(function(postCount) {
  totalPostCount = postCount;
  var pages = Math.ceil(postCount/pageSize);
  for (var pageNum = 0; pageNum < pages; pageNum++) {
    getPage(pageNum);
  }
});
