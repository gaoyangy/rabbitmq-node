# mq



## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Development

```bash
$ docker search rabbitmq:management
$ docker pull rabbitmq:management
$ docker run -d -p 5672:5672 -p 15672:15672 --name rabbitmq rabbitmq:management
// 打开http://127.0.0.1:15672 可以使用默认的账户登录，用户名和密码都guest

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


[egg]: https://eggjs.org