/**
 * [GlueObject]{@link GlueObject} namespace of [Glue]{@link Glue} Module
 *
 * @module Glue
 * @requires GlueInstance
 * @requires GlueException
 * @version 1.0.0
 */
'use strict';

const
  GlueInstance = require('./instance'),
  GlueException = require('./exception');

/**
 * @class
 * @classdesc A class that stores common methods to GlueNamespace and GlueTask classes
 * @abstract
 */
class GlueObject {

  /**
   * @constructor
   */
  constructor() {

  }

  /**
   * @static
   * @method
   * @this {GlueNamespace}
   * @return {Boolean} If a name is valid or not
   * @example
   * if (!this.isValid()) {
   *   throw GlueException('The given name is not valid!');
   * }
   */
  isValidName (name) {
    var regexTest = /^[A-Za-z-:]*$/.test(this.name);

    if(! regexTest) {
      throw new GlueException('The given name is not valid!');
    }
  }

  /**
   * @static
   * @method
   * @this {GlueNamespace}
   * @return {Boolean} If a name is registered or not
   * @example
   *
   * if(this.isRegistered()) {
   *   throw new GlueException('The given name is already registered!')
   * }
   */
   isRegisteredNamespace () {

    /*
     First check if there is a namespace registered
     */
    if (GlueInstance.namespaces.length > 0) {
      for (let namespace of GlueInstance.namespaces) {
        if (namespace.name === this.name) {
          throw new GlueException('There is a namespace a registered with this name: ' + this.name);
        }
      }
    }

    return false;
  };
}

module.exports = GlueObject;
