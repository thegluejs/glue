(() => {
  var glue = require('./lib/glue');

  glue
    .namespace('namespace', 'Glob all that things')
    .namespace('xxx')
    .namespace('xxx');

  // glue.task();
  //
  console.log(glue);
})();
