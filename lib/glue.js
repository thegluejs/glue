'use strict'

module.exports = (() => {

  var
    colors = require('colors'),
    moment = require('moment');

  var Glue = function() {
    this.instance = this;
    this.namespaces = [];
  };

  var GlueException = function (...args) {
    this.message = args[0];
    this.name = 'GlueException';
  };

  var GlueMessage = function (...args) {
    var that = this;

    that.start = new Date();
    that.slug = arguments[0];

    var render = function() {
      return console.log(build());
    };

    var build = function() {
      var startString = 'GlueJS'.blue;
      var dateBlock = '['.red + moment(that.start).format("YYYY-MM-DD HH:mm:ss") + ']'.red + ' - ';
      var message = '' + that.slug + ' slug Added!';

      return startString + ' ' + dateBlock + message;
    };

    return {
      render : render
    }
  }

  var GlueNamespace = function(...args) {
    this.name = args[0];
    this.description = args[1] || undefined;
    this.tasks = {};
  };

  var GlueTask = function(...args) {
    this.slug = args[0];
    this.namespace = args[1] || 'default';
    this.description = args[2] || undefined;
    this.callback = args[3] || this.description;
  };

  Glue.prototype = function(...args) {

    var namespace = function(...args) {
      const
        that = this,
        slug = args[0],
        description = args[1];

      var add = function(namespace) {
        new GlueMessage(slug).render();
        var
          namespace = new GlueNamespace(slug, description),
          instance = isRegistered(slug);

        // @TODO What i'll do with double namespace definiticaion
        if(!isRegistered(slug)) {
          that.namespaces.push(namespace);
        }
      };

      var isRegistered = function(toCheck) {
        for(let [index, namespace] of that.namespaces.entries()) {
          if(namespace.name === toCheck) {
            return index;
          }
        }

        return false;
      }

      var getAll =  function () {
        return this.namespaces;
      }

      if(slug == undefined) {
       throw new GlueException('The slug need to be informed');
      } else {
        add();
      }

      return this.instance;
    };

    /**
     * task Add a new task
     * @param slug The task slug
     * @param callback The callback to be executed
     * @return glue Returns a glue instance
     */
    var task = function(...args) {
      const
        slug = args[0] || undefined,
        namespace = args[0] || undefined,
        callback = args[0] || undefined;

      var add = function(slug, namespace, callback) {
        new GlueMessage(slug).render();

        var namespace = new GlueNamespace(namespace);

        return this.instance;
      };

      var aaaa = function(slug, namespace, callback) {
        new GlueMessage(slug).render();

        var namespace = new GlueNamespace(namespace);

        return this.instance;
      };

      if(slug == undefined) {
       throw new GlueException('The slug need to be informed');
      } else {
        this.add();
      }

      return this.instance;
    };

    return {
      task : task,
      namespace : namespace
    };
  }();

  return new Glue;

})();
