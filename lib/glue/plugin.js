/**
 * @module Glue
 * @requires GlueException
 * @version 1.0.0
 */

'use strict';

var GlueException = require('./exception');

/**
 * @class
 * @classdesc
 */

class GluePlugin {

  /**
   * @constructor
   */
  constructor() {
    this.instance = undefined;
  }

  /**
   * @method
   * @memberOf GluePlugin
   */
  add() {
     return true;
  }
}



