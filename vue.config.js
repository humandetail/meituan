const path = require('path');

function resolve (dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('styles', resolve('src/assets/styles'))
      .set('data', resolve('src/assets/data'))
      .set('js', resolve('src/assets/js'))
      .set('utils', resolve('src/utils'))
      .set('models', resolve('src/models'))
      .set('components', resolve('src/components'))
  }
};
