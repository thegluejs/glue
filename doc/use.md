## Use


```javascript
var glue = require('glue');

glue
  .namespace('build')
  .task('teste', function() {
      console.log('teste');
  })
  .task('teste', () => {
      console.log('teste');
  });  


```
