(() => {
  var glue = require('./lib/glue');

  glue
    .namespace('build', 'Glob all that build things')
      .task('teste', function() {});

  glue
    .namespace('build', 'Glob all that build things')
      .task('outro', ['teste']);

  glue.task('another');

  console.log(glue);
})();
