var tumblr = require('tumblr.js');

var TumblrPostExporter = function(config) {
  this.client = tumblr.createClient(config.auth_info);
  this.blog_name = config.blog_name;
};

TumblrPostExporter.prototype.numPosts = function(callback) {
  var options = { limit: 1, filter: 'raw' };
  this.client.posts(this.blog_name, options, function(err, data) {
    callback(data.total_posts);
  });
};

TumblrPostExporter.prototype.posts = function(offset, limit, errHandler, postsCallback) {
  if (typeof postsCallback === 'undefined') {
    postsCallback = errHandler;
    errHandler = null;
  }

  var options = { offset: offset, limit: limit, filter: 'raw' };

  this.client.posts(this.blog_name, options, function(err, data) {
    if (err !== null) {
      if (typeof errHandler === 'function') {
        errHandler(err);
      }
    } else {
      postsCallback(data.posts);
    }
  });
};

module.exports = TumblrPostExporter;

