(() => {
  var glue = require('./lib/glue');

  // glue

  glue
    .namespace('build', 'Glob all that build things')
    .task('mimimi', function(){});
  // .task('mimimi', 'tessss', function(){});

  // glue
  //   .namespace('build-teste', 'Glob all that build things')
  //   .task()
  //   .task('teste', function(){})
  //   .task('teste', 'descricao', function(){})
  //   .task('teste', ['namespace'], 'descrição', function(){})
  //   .task({name: 'object', callback : function(){}});
  //
  // glue
  //   .task('teste', 'kdslkklsdlksdlk', callback);
})();
