/**
 * @module Glue
 * @version 1.0.0
 */
'use strict';

/**
 * @class
 * @classdesc Representation of a GlueException
 */
class GlueException {

  /**
   * @constructor
   * @this {GlueException}
   * @param {String} message - The message that will be throwed
   */
  constructor(message) {

    /**
     * @private
     * @type {String}
     * @memberOf GlueException
     */
    this.message = message || 'Generic exception';

    /**
     * @private
     * @type {String}
     * @memberOf GlueException
     * @default
     */
    this.name = 'GlueException';
  }
}

module.exports = GlueException;
