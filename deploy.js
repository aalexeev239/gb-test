var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(path.join(__dirname, 'static'), function (err) {
  if (err) {
    console.error('deploy failed');
    return;
  } else {
    console.log('deploy success');
  }
});
