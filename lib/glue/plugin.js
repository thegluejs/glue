'use strict'

module.exports = ((...args) => {

  /**
   * @namespace GluePlugin
   * @constructor
   */
  var GluePlugin = function (...args) {
    this.instance = undefined;
  };

  return GluePlugin;
})();