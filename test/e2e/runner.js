// require babel-register and set Babel presets options to es2015
require('babel-register')({
  presets: ['es2015']
});

require('./../../build/main.js');

var opts = process.argv.slice(2);
if (opts.indexOf('--config') === -1) {
  opts = opts.concat(['--config', 'test/e2e/nightwatch.conf.js']);
}
if (opts.indexOf('--env') === -1) {
  opts = opts.concat(['--env', 'chrome']);
}

var spawn = require('cross-spawn');
var runner = spawn('./node_modules/.bin/nightwatch', opts, { stdio: 'inherit' });

runner.on('exit', (code) => {
  console.log('EXIT: Ending testing session');
  process.exit(code);
});

runner.on('error', (err) => {
  console.log('ERROR: Ending testing session');
  throw err;
});