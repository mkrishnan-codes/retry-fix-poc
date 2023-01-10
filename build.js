// Ref - https://marmelab.com/blog/2021/07/22/cra-webpack-no-eject.html
const rewire = require('rewire');
const defaults = rewire('react-scripts/scripts/build.js');
const config = defaults.__get__('config');

const dateSuffix = new Date().toISOString().slice(0, -5);
config.output.chunkFilename = `[id]--${dateSuffix}.js`