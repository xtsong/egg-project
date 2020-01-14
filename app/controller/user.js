'use strict';

// app/controller/UserController.js
const { Controller } = require('egg');
class UserController extends Controller {
  /*
  * add用户
  * CreateBy 孤岛拾荒
  */
  async addUser() {
    const { ctx, service } = this;
    ctx.helper.pre('addUser');
    const params = ctx.request.body || {};
    const result = await service.user.addUser(params);
    ctx.body = result;
    ctx.helper.end('addUser');
  }

  /*
  * get用户
  * CreateBy 孤岛拾荒
  */
  async getUser() {
    const { ctx, service } = this;
    ctx.helper.pre('getUser');
    const params = ctx.query || {};
    const result = await service.user.getUser(params);
    ctx.body = result;
    ctx.helper.end('getUser');
  }

}
module.exports = UserController;
