'use strict';

// app/controller/UserController.js
const { Controller } = require('egg');
class UserController extends Controller {
  /*
  * add用户
  * CreateBy 孤岛拾荒
  */
  async addUser() {
    const { ctx, service, app } = this
    ctx.helper.pre("addUser")
    let params = ctx.request.body || {}
    let result = await service.user.addUser(params)
    ctx.body = result
    ctx.helper.end("addUser")
  }

  /*
  * get用户
  * CreateBy 孤岛拾荒
  */
  async getUser() {
    const { ctx, service, app } = this
    ctx.helper.pre("getUser")
    let params = ctx.query || {}
    let result = await service.user.getUser(params)
    ctx.body = result
    ctx.helper.end("getUser")
  }

}
module.exports = UserController;