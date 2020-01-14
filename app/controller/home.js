'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.helper.pre('index');
    ctx.response.body = 'Hello, egg';
    ctx.helper.end('index');
  }

  async name() {
    const { ctx, app } = this;
    ctx.helper.pre('name');
    ctx.response.body = 'Hello, ' + app.config.author;
    ctx.helper.end('name');
  }
}

module.exports = HomeController;
