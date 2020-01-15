'use strict';

const assert = require('assert');
const mock = require('egg-mock');

describe('test/controller/user.test.js', () => {
  let app;
  before(() => {
    // 创建当前应用的 app 实例
    app = mock.app();
    // 等待 app 启动成功，才能执行测试用例
    return app.ready();
  });
  afterEach(mock.restore);

  describe('GET /getUser', () => {
    it('should exists user', () => {
      return app.httpRequest()
        .get('/getUser?age=20')
        .expect(200)
        .expect([{
          _id: '5e1ed4aaf679935a80e5b826',
          age: 20,
          name: 'song',
          info: 'javascript',
          create_time: '2020-01-15T09:00:26.330Z',
          __v: 0,
        }]);
    });

    it('should mock service error', () => {
      app.mockServiceError('user', 'getUser', 'Internal Server Error');
      return app.httpRequest()
        .get('/getUser?age=20')
        .expect(500)
        .expect(/Internal Server Error/);
    });
  });

  describe('GET /httpclient', () => {
    it('should mock httpclient response', () => {
      app.mockHttpclient('/getUser', {
        data: { age: 20 },
      });
      return app.httpRequest()
        .get('/getUser?age=20')
        .expect([{
          _id: '5e1ed4aaf679935a80e5b826',
          age: 20,
          name: 'song',
          info: 'javascript',
          create_time: '2020-01-15T09:00:26.330Z',
          __v: 0,
        }]);
    });
  });

  describe('ctx', () => {
    it('should get a ctx', () => {
      const ctx = app.mockContext();
      assert(ctx.method === 'GET');
      assert(ctx.url === '/');
    });

    it('should mock ctx.user', () => {
      const ctx = app.mockContext({
        user: {
          age: 20,
        },
      });
      assert(ctx.user);
      assert(ctx.user.age === 20);
    });
  });
});
