'use strict';

const Controller = require('egg').Controller;
const consumer = require('../queue/consumer');
const producer = require('../queue/producer');
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
    setTimeout(() => {
      consumer.send()
    }, 100)
    setTimeout(() => {
      producer.send()
    }, 3000)
  }
}

module.exports = HomeController;
