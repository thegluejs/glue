'use strict'

module.exports = (() => {
  const
    event = require('events');

  const
    GlueNamespace = require('./glue/namespace'),
    GlueTask      = require('./glue/task'),
    GlueException = require('./glue/exception'),
    GlueMessage   = require('./glue/message');

/**
 * Glue - Task runner that works!
 * @namespace Glue
 * @author Fábio Luciano <fabio@naoimporta.com>
 * @constructor Glue
 */
  var Glue = function() {
    this.instance = this;
    this.lastNamespace = 'default';
    this.namespaces = [];
  };

  /**
   *
   * @namespace Glue
   * @param slug The namespace slug
   * @param description The namespace description
   * @return Glue
   */
  Glue.prototype.namespace = function(...args) {
    const
      that = this,
      slug = args[0],
      description = args[1],
      parent = args[2];

    /**
     * Add a new namespace
     * @namespace Glue
     */
    var add = function() {
      const
        namespace = new GlueNamespace(slug, description, that.lastNamespace),
        instance = isRegistered(slug);

      that.lastNamespace = slug;

      new GlueMessage(slug).render();

      // @TODO What i'll do with double namespace definiticaion
      if( ! isRegistered(slug)) {
        that.namespaces.push(namespace);
      }
    };

    /**
     * Check if a specific namespace is registered
     * @param toCheck The namespace to check
     * @return Boolean Whenever if a namespace is registered or not
     */
    var isRegistered = function(toCheck) {
      for(let [index, namespace] of that.namespaces.entries()) {
        if(namespace.name === toCheck) {
          return index;
        }
      }

      return false;
    }

    /**
     * Get all namespaces
     * @return object
     */
    var getAll = function () {
      return this.namespaces;
    }

    if(slug == undefined || slug.length === 0)
      throw new GlueException('The slug need to be informed');

    add();

    return this.instance;
  };


  Glue.prototype.task = function(...args) {
    const
      that = this,
      slug = args[0];

    var
      namespace = args[1],
      callback = args[2];

      if(typeof namespace === 'function')
        callback = namespace;

    /**
     * Add a new Task to a namespace
     * @param  string  slug  The slug that needs to be registered
     * @param  string  namespace The namespace where the new task needs to be registered
     * @param  function callback The callback that will be executed
     */
    var add = function() {
      new GlueMessage(slug).render();

      var namespace = new GlueNamespace(namespace);

      return that.instance;
    };

    if(slug == undefined || slug.length === 0)
      throw new GlueException('The slug need to be informed');

    add();

    return this.instance;
  };

  return new Glue;

})();
