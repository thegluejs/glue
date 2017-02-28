/**
 * @module Glue
 * @version 1.0.0
 */

'use strict'

/**
 * @class
 * @classdesc Singleton representation of a Glue instance
 */
class GlueInstance {

  /**
   * @constructor
   */
  constructor() {
    /**
     * @private
     * @type {String}
     * @memberOf GlueInstance
     */
    this.lastNamespace = 'default';


    /**
     * @private
     * @type {String}
     * @memberOf GlueInstance
     */
    this.namespaces = [];
  }
  
  /**
   * @public
   * @method
   * @returns {GlueInstance}
   * @example
   *
   * var instance = new GlueInstance;
   * instance.getInstance();
   */
  getInstance() {
    return this;
  };
}

module.exports = new GlueInstance;
