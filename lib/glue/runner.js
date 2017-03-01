'use strict';

/**
 * [GlueRunner]{@link GlueRunner} namespace of [Glue]{@link Glue} Module
 *
 * @module Glue
 * @requires GlueInstance
 * @requires GlueNamespace
 * @requires GlueTask
 * @version 1.0.0
 */

const
  GlueInstance = require('./instance');

var
  GlueNamespace = require('./namespace'),
  GlueTask = require('./task');

/**
 * @class
 */
class GlueRunner {

  /**
   * This is a facade for all Glue principal operations
   *
   * @constructor
   * @this {GlueRunner}
   * @memberOf GlueRunner
   * @returns {GlueRunner} A {GlueRunner} instance
   * @example
   *
   * var runner = new GlueRunner;
   */
  constructor() {
    return this
  }

  /**
   * @private
   * @method
   * @this {GlueRunner}
   * @param {String} name - Name of Namespace
   * @param {String} [description] - Description of namespace porpose.
   * @param {GlueNamespace} [parent] - Parent namespace that this are into.
   * @return {GlueRunner} A {GlueRunner} instance
   * @example
   *
   * GlueRunner.namespace(name, description, parent)
   */
  namespace(name, description, parent) {
    (new GlueNamespace(name, description, parent)).add();
    return this;
  }

  /**
   * @private
   * @method
   * @this {GlueRunner}
   * @param {String} name - Name of Namespace
   * @param {Function} callback - A callback that will be executed
   * @param {GlueNamespace} [namespace=default] - Namespace that the task belongs
   * @param {String} [description] - Description of namespace porpose.
   * @return {GlueRunner} A {GlueRunner} instance
   * @example
   *
   * GlueRunner.task(name, description, parent)
   */
  task(name, description, callback, namespace) {
    (new GlueTask(name, description, callback, namespace)).add();
    return this;
  };
}

module.exports = GlueRunner;
