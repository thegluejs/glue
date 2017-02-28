'use strict';

/**
 * [GlueException]{@link GlueException} namespace of [Glue]{@link Glue} Module
 *
 * @module Glue
 * @namespace GlueException
 * @version 1.0.0
 */
module.exports = function(...args) {

  /**
   *
   * Representation of a GlueException
   *
   * @constructor
   * @this {GlueException}
   * @param {String} message - The message that will be throwed
   */
  var GlueException = function (message) {
    this.message = message || 'Generic exception';
    this.name = 'GlueException';
  };

  return new GlueException(args[0]);
};
