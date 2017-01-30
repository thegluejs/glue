'use strict'

module.exports = (() => {

  const
    GlueNamespace = require('./glue/namespace'),
    GlueTask = require('./glue/task'),
    GlueException = require('./glue/exception'),
    GlueMessage = require('./glue/message');

/**
 * Glue - Task runner that works!
 */
  var Glue = function() {
    this.instance = this;
    this.lastNamespace = 'default';
    this.namespaces = [];
  };

  /**
   * namespace Add a new namespace
   * @param slug The namespace slug
   * @param description The namespace description
   * @return glue Returns a glue instance
   */
  Glue.prototype.namespace = function(...args) {
    const
      that = this,
      slug = args[0],
      description = args[1],
      parent = args[2] || 'default';

    /**
     * [add description]
     * @param {[type]} namespace [description]
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
     * [isRegistered description]
     * @param  {[type]}  toCheck [description]
     * @return {Boolean}         [description]
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
     * [getAll description]
     * @return {[type]} [description]
     */
    var getAll = function () {
      return this.namespaces;
    }

    if(slug == undefined || slug.length === 0)
      throw new GlueException('The slug need to be informed');

    add();

    return this.instance;
  };

  /**
   * [task description]
   * @param  {...[type]} args [description]
   * @return {[type]}         [description]
   */
  Glue.prototype.task = function(...args) {
    const
      that = this,
      slug = args[0],
      namespace = args[0],
      callback = args[0];

    /**
     * [add description]
     * @param {[type]}   slug      [description]
     * @param {[type]}   namespace [description]
     * @param {Function} callback  [description]
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
