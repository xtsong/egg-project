'use strict';

const assert = require('assert');
const mock = require('egg-mock');

describe('test/service/user.test.js', () => {
  let app;
  before(() => {
    // 创建当前应用的 app 实例
    app = mock.app();
    // 等待 app 启动成功，才能执行测试用例
    return app.ready();
  });
  afterEach(mock.restore);

  describe('getUser()', () => {
    it('should get exists user', function* () {
      const ctx = app.mockContext();
      const user = yield ctx.service.user.getUser({ name: 'tao' });
      assert(user);
      assert(user[0].name === 'tao');
    });

    it('should get null when user not exists', function* () {
      const ctx = app.mockContext();
      const user = yield ctx.service.user.getUser({ name: 'tao' });
      assert(user.length);
    });

    it('should mock tao exists', function* () {
      const ctx = app.mockContext();
      app.mockService('user', 'getUser', function* () {
        return {
          name: 'tao',
        };
      });
      const user = yield ctx.service.user.getUser({ name: 'tao' });
      assert(user);
      assert(user.name === 'tao');
    });
  });
});
