'use strict'

module.exports = ((message) => {
  return function (...args) {
    this.message = args[0];
    this.name = 'GlueException';
  };
})();
