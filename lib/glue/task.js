'use strict'

module.exports = ((...args) => {
  return function(...args) {
    this.slug = args[0];
    this.namespace = args[1] || 'default';
    this.description = args[2] || undefined;
    this.callback = args[3] || this.description;
    this.isRunning = false;
  };
})();
