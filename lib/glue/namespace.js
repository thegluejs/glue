'use strict'

module.exports = ((...args) => {

  /**
   * @namespace GlueNamespace
   * @constructor
   */
  var GlueNamespace = function (...args) {
    this.name = args[0];
    this.description = args[1] || undefined;
    this.parent = args[2] || 'default';
    this.tasks = {};
  };

  GlueNamespace.prototype.add = () => {

  };
})();
