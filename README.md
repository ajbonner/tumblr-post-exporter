# tumblr-post-exporter

## Usage
 - run npm install 
 - copy config.json.dist to config.json 
 - in config.json, fill in oauth credential details and blog name (you'll need to [register your
   app](https://www.tumblr.com/oauth/register) and [create
   an oauth access token + secret](https://api.tumblr.com/console/)
 - run the exporter $ node tumblr-port-exporter.js

[Tumblr API Documentation](https://www.tumblr.com/docs/en/api/v2)

## Requirements
 - iojs >= 1.5
 - a unixish os

## Customisation
Rewrite exporter.js according to your needs, TumblrPostExporter.posts does the (tiny)
amount of grunt work to grab posts from tumblr's API and passes them off
to the callback passed in. You can supply an error callback as the first arg to
the posts method to handle any errors (and then supply your success callback as
the second argument).

## Licence
MIT, do what you will with it, just include a copy of the MIT licence.

## Contact
Twitter: [ajbonner](https://twitter.com/ajbonner)

Email: [aaron@aaronbonner.io](mailto:aaron@aaronbonner.io)

Blog: [https://aaronbonner.io](https://aaronbonner.io)

