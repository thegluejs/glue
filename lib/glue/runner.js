'use strict'

/**
 * @module Glue
 * @exports GlueRunner
 * @version 1.0.0
 */
module.exports = function() {

  var GlueInstance = require('./instance');

  /**
   * @class
   */
  var GlueRunner = function() {
    this.instance = GlueInstance;
  };


  /**
   * @function
   * @name GlueRunner#namespace
   * @param name
   * @param description
   * @param parent
   */
  GlueRunner.prototype.namespace = function(name, description, parent) {
    var namespace = require('./namespace')(this, name, description, parent).add();
    return this;
  };

  /**
   * @function
   * @name GlueRunner#task
   * @param name
   * @param description
   * @param parent
   */
  GlueRunner.prototype.task = function(name, description, parent) {
    require('./task')(GlueInstance, name, description, parent);

    return this;
  };

  return new GlueRunner;

}();
