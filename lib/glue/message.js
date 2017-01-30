'use strict'

module.exports = ((...args) => {
  const
    colors = require('colors'),
    moment = require('moment');

  return function (...args) {
    var that = this;

    that.start = new Date();
    that.slug = arguments[0];

    var render = function() {
      return console.log(build());
    };

    var build = function() {
      var startString = 'GlueJS'.blue;
      var dateBlock = '['.red + moment(that.start).format("YYYY-MM-DD HH:mm:ss") + ']'.red + ' - ';
      var message = '' + that.slug + ' slug Added!';

      return startString + ' ' + dateBlock + message;
    };

    return {
      render : render
    }
  };
})();