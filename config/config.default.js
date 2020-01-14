/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path')

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  config.security = {
    csrf: false
  }

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1578878561376_5362';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    author: "xtsong"
  };

   //logger config
   config.customLogger = {
    testLogger: {
      file: path.join(appInfo.root, 'logs/testLogger.log'),
      outputJSON: true,
    }
  }

  //egg-logrotator
  // config.logrotator = {
  //   filesRotateByHour: [
  //     path.join(appInfo.root, 'logs', appInfo.name, 'testLogger.json.log'),
  //   ],                                // 需要按小时切割的文件
  //   hourDelimiter: '-',               // 按照小时切割的文件, 小时部分的分隔符.
  // };

  //mongodb配置信息
  config.mongoose = {
    url: 'mongodb://140.143.230.232:27017/test',
    options: {
      poolSize: 40,
    },
  }

  return {
    ...config,
    ...userConfig,
  };
};
