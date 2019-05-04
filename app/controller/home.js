'use strict';

const Controller = require('egg').Controller;
const server = require('../queue/app');
const client = require('../queue/client');
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
    server.send()
    client.send()
  }
}

module.exports = HomeController;
