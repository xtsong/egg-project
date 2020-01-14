'use strict';
const Service = require('egg').Service;

class UserService extends Service {
  /*
  * addUser
  * CreateBy 孤岛拾荒
  */
  async addUser(params) {
    const { ctx, service, app } = this
    let result = await ctx.model.User.create(params)
    return result
  }

  /*
  * getUser
  * CreateBy 孤岛拾荒
  */
  async getUser(params) {
    const { ctx, service, app } = this
    let result = await ctx.model.User.find(params)
    return result
  }

}

module.exports = UserService; 