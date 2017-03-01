/**
 * @module Glue
 * @exports GlueMessage
 */
'use strict'

/**
 * @class
 * @classdesc A Object to store glue messages
 */
class GlueMessage {

  /**
   * @constructor
   */
  constructor() {

    /**
     * @private
     * @type {boolean}
     * @memberOf GlueMessage
     */
    this.verbose = false;
  }
}

module.exports = GlueMessage;
