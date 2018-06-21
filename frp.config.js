'use strict';
// https://github.com/frontainer/frontplate-cli/wiki/6.%E8%A8%AD%E5%AE%9A
module.exports = function(production) {
  global.FRP_SRC = 'src';
  global.FRP_DEST = `${__dirname}/public`;
  return {
    clean: {},
    html: {},
    style: production ? {} : {type: 'stylus'},
    script: production ? {} : {},
    server: {},
    copy: {},
    sprite: [],
    test: {}
  }
};