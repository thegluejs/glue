/**
 * [GlueNamespace]{@link GlueNamespace} namespace of [Glue]{@link Glue} Module
 *
 * @module Glue
 * @requires GlueException
 * @requires GlueObject
 * @requires GlueInstance
 * @version 1.0.0
 */

'use strict';

const
  GlueObject = require('./object'),
  GlueException = require('./exception'),
  GlueInstance = require('./instance');

/**
 * @class
 * @extends GlueObject
 */
class GlueNamespace extends GlueObject {

  /**
   *
   * Register a new namespace in the [instance of Glue]{@link GlueInstance}. The new namespace
   * needs a [name]{@link GlueNamespace#name}, and a [description]{@link GlueNamespace#description}. If a
   * [parent namespace]{@link GlueNamespace.parent} is informed, the namespaced will be added into it.
   *
   * @constructor
   * @this {GlueNamespace}
   * @param {String} name - Name of Namespace
   * @param {String} [description] - Description of namespace porpose.
   * @param {GlueNamespace} [parent] - Parent namespace that this are into.
   * @example
   *
   * var namespace = new GlueNamespace(name, description, parent);
   * namespace.add();
   */
  constructor(name, description, parent) {
    super();

    /**
     * @private
     * @type {String}
     * @memberOf GlueNamespace
     */
    this.name = name.toLowerCase().trim();

    /**
     * @private
     * @type {String|Undefined}
     */
    this.description = description.trim() || undefined;

    /**
     * @private
     * @type {GlueNamespace}
     * @memberOf GlueNamespace
     */
    this.parent = parent || GlueNamespace;

    /**
     * @private
     * @type {Object}
     * @memberOf GlueNamespace
     */
    this.tasks = {};
  }
  
  /**
   * @public
   * @method
   * @this {GlueNamespace}
   * @return {GlueRunner} A {@link GlueRunner} instance
   * @example
   *
   * this.add();
   */
  add() {
    this.isValidName();
    this.isRegisteredNamespace()
    
    GlueInstance.namespaces.push(this);
  };
}

module.exports = GlueNamespace;
