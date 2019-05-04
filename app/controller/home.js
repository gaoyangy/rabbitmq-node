'use strict';

const Controller = require('egg').Controller;
const server = require('../queue/consumer');
const client = require('../queue/producer');
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
    server.send()
    client.send()
  }
}

module.exports = HomeController;
