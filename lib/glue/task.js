/**
 * [GlueTask]{@link GlueTask} namespace of [Glue]{@link Glue} Module
 *
 * @module Glue
 * @requires GlueObject
 * @version 1.0.0
 */
'use strict';

const
  GlueObject = require('./object');


/**
 * @class
 * @classdesc
 * @extends GlueObject
 */
class GlueTask extends GlueObject {
  
  /**
   * @constructor
   * @param {String} name - The name of the task
   * @param {String} description - The
   * @param {String} namespace - The namespace that the task will live into
   * @param {Function} callback - A callback to be executed
   */
  constructor(name, description, namespace, callback) {
    this.name = args[0];
    this.description = args[2] || undefined;
    this.namespace = args[1] || 'default';
    this.callback = args[3] || this.description;
    this.isRunning = false;
  }
}

exports.definition = GlueTask;
