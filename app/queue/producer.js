const amqplib = require('amqplib');

exports.push = function() {
  amqplib.connect('amqp://localhost').then(async conn => {
    try {
      const channel = await conn.createChannel();
      await channel.assertQueue('/api', { durable: false });
      await channel.sendToQueue('/api', Buffer.from('hello'));
      console.log(" [x] Sent '%s'", 123456);
    } catch (error) {
      console.log(error);
    }
  }).catch(console.error);
};
