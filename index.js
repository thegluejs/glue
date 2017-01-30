(() => {
  var glue = require('./lib/glue');

  glue
    .namespace('build', 'Glob all that build things')
      .namespace('application', 'Glob all that application things')
        .namespace('other', 'Glob all that other things')
          .task('teste', function() {
            console.log('asdsdsa');
          });

  // glue.task();
  //
  console.log(glue);
})();
