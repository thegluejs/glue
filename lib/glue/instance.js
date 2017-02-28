'use strict'

/**
 * @namespace GlueInstance
 * @constructor
 * @class
 */
var GlueInstance = function() {
  
  /**
   * @default
   * @type {string}
   */
  this.lastNamespace = 'default';
  
  /**
   * @default
   * @type {string}
   */
  this.namespaces = [];
  
};

/**
 * @function getInstance
 * @returns {GlueInstance}
 */
GlueInstance.prototype.getInstance = function () {
  return this;
};

/**
 * @module Glue
 * @exports GlueInstance
 */
module.exports = new GlueInstance;
