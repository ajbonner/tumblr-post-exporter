var tumblr = require('tumblr.js');

var TumblrPostExporter = function(config) {
  this.client = tumblr.createClient(config.auth_info);
  this.blog_name = config.blog_name;
}

TumblrPostExporter.prototype.posts = function(errHandler, postsCallback) {
  if (typeof postsCallback === 'undefined') {
    postsCallback = errHandler;
    errHandler = null;
  }

  this.client.posts(this.blog_name, function(err, data) {
    if (err !== null) {
      if (typeof errHandler === 'function') {
        errHandler(err);
      }
    } else {
      postsCallback(data.posts);
    }
  });
}

module.exports = TumblrPostExporter;

