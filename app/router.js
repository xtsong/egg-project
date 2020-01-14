'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/name', controller.home.name);
  router.post('/addUser', controller.user.addUser);
  router.get('/getUser', controller.user.getUser);
};
