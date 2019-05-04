'use strict';
const amqplib = require('amqplib');

exports.send = function() {
  amqplib.connect('amqp://localhost').then(async conn => {
    try {
      const channel = await conn.createChannel();
      await channel.assertQueue('api', { durable: true });
      await channel.sendToQueue('api', new Buffer(123456));
      console.log(" [x] Sent '%s'", 123456);
      conn.close();
    } catch (error) {
      console.log(error);
    }
  });
};
