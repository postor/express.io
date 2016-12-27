/**
 * 
 */
var express = require('express')
var jadeStatic = require('jade-static')
var sassMiddleware = require('node-sass-middleware');
var browserify = require('browserify-middleware')
var path = require('path')

var staticPath = path.join(__dirname,'..','static')
var staticSrc = path.join(staticPath,'src')
var staticDist = path.join(staticPath,'dist')
module.exports = function(app){
  app.use([
    jadeStatic(staticSrc),
    sassMiddleware({
      src: staticSrc,
      dest: staticDist,
      debug: true,
      outputStyle: 'compressed',
      indentedSyntax: true,
    }),
    browserify(staticSrc),
    express.static(staticPath),
  ]);
}