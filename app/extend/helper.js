'use strict';

const moment = require('moment');
const _ = require('lodash');

module.exports = {
  // 格式化时间
  formatTime(time) {
    return moment(time).format('YYYY-MM-DD HH:mm:ss');
  },
  pre(m) {
    // 将query和body合并到arg中
    this.ctx.arg = _.merge(this.ctx.query, this.ctx.request.body);
    // 输出请求日志
    this.app.getLogger('testLogger').info(m, JSON.stringify(this.ctx.arg), '参数信息');
    this.app.getLogger('testLogger').info(m, JSON.stringify(this.ctx.request), '请求信息');
  },
  end(m) {
    // 输出响应日志
    this.app.getLogger('testLogger').info(m, JSON.stringify(this.ctx.body), '响应结果');
  },
};
