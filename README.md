# project

egg.js分享项目

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


### 单元测试

项目整体测试
- Use `npm test` to run unit test.


项目单个模块测试
- Use `npm test-local` to run unit test.

例如：npm test-local test/app/controller/home.test.js


[egg]: https://eggjs.org