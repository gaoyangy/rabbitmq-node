'use strict';

const Controller = require('egg').Controller;
const consumer = require('../queue/consumer');
const producer = require('../queue/producer');
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
    consumer.pull();
    producer.push();
  }
}

module.exports = HomeController;
