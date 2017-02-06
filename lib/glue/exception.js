'use strict'

module.exports = ((message) => {

  /**
   * @namespace GlueException
   * @constructor
   */
  var GlueException = function (...args) {
    this.message = args[0];
    this.name = 'GlueException';
  };

  return GlueException;
})();
