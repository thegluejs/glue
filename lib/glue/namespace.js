'use strict'

module.exports = ((...args) => {
  return function(...args) {
    this.name = args[0];
    this.description = args[1] || undefined;
    this.parent = args[2] || undefined;
    this.tasks = {};
  };
})();
