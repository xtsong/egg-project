'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const {ctx, service, app} = this
    ctx.helper.pre("index");
    ctx.response.body = 'Hello, ' + ctx.arg.name
    ctx.helper.end("index");
  }

  async name() {
    const {ctx, service, app} = this
    ctx.helper.pre("name");
    ctx.response.body = 'Hello, ' + app.config.author
    ctx.helper.end("name");
  }
}

module.exports = HomeController;
