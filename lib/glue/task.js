/**
 * [GlueTask]{@link GlueTask} namespace of [Glue]{@link Glue} Module
 *
 * @module Glue
 * @requires GlueObject
 * @version 1.0.0
 */
'use strict';

const
  GlueInstance = require('./instance'),
  GlueObject = require('./object'),
  GlueException = require('./exception');


/**
 * @class
 * @classdesc 
 * @extends GlueObject
 */
class GlueTask extends GlueObject {
  
  /**
   * @constructor
   * @param {String} name - The name of the task
   * @param {Function} callback - A callback to be executed
   * @param {String} [namespace=default] - The namespace that the task will live into
   * @param {String} [description] - The description of task
   */
  constructor(name, description, callback, namespace) {
    super();

    /**
     * @private
     * @type {string}
     * @memberOf GlueTask
     */
    this.name = name;

    /**
     * @private
     * @type {Function}
     * @memberOf GlueTask
     */
    this.callback = callback;

    /**
     * @private
     * @type {GlueNamespace}
     * @memberOf GlueTask
     */
    this.namespace = namespace;

    /**
     * @private
     * @type {Function}
     * @memberOf GlueTask
     */
    this.description = description;

    /**
     * @private
     * @type {Boolean}
     * @memberOf GlueTask
     */
    this.isRunning = false;
  }

  /**
   * Perform object hydration swapping values to the right place
   *
   * @private
   * @method
   * @this {GlueTask}
   * @return void
   */
  hydrate() {

    /**
     * Swap description with callback for task definition like this
     *
     * glue.task('taskname', function(){})
     */
    if(typeof this.description === 'function') {
      this.callback = this.description;
      this.description = undefined;
    }

    /**
     * An object was passed to the task definition
     */
    if(typeof this.name === 'object') {
      var transientObject = this.name;

      this.name = transientObject.name;
      this.description = transientObject.description;
      this.namespace = transientObject.namespace;
      this.callback = transientObject.callback;
    }

    // if(this.name === 'string' && this.description === 'string') {
    //   this.name =
    //
    // }










    this.name = this.name.trim().toLowerCase();

    // if(this.description !== this.callback)




  }

  /**
   *
   */
  validate() {

    /*
      Check if a task name is defined, and is not a object
     */
    if(this.name === undefined && typeof this.name !== 'object')
      throw new GlueException('A name of task need to be informed');

    if(this.callback === undefined)
      throw new GlueException('A callback for that task "' + this.name + '" is required.');
    //
    // if(typeof this.callback !== 'function')
    //   throw new GlueException('The second argument needs to be a function');
  }

  add() {
    this.hydrate();
    this.validate();

    console.log(this);
  }
}

module.exports = GlueTask;
