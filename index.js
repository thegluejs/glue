(() => {
  var glue = require('./lib/glue');

  // console.log(glue);

  glue
    .namespace('build-teste', 'Glob all that build things')
    .namespace('builddasda-testssse', 'Glob all that build things')
      // .task('teste', function() {});
  //
  // glue
  //   .namespace('build', 'Glob all that build things')
  //     .task('outro', ['teste']);
  //
  // glue.task('another');
  //
  // console.log(glue);
})();
