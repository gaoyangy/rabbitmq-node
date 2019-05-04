const amqplib = require('amqplib');
let times = 1
exports.push = function() {
  amqplib.connect('amqp://localhost').then(async conn => {
    try {
      const channel = await conn.createChannel();
      await channel.assertQueue('/api', { durable: false });
      const ch = await channel.sendToQueue('/api', Buffer.from('hello'));
      let mqtime = setInterval(() => {
        this.push()
        ++ times
      }, 1000)
      setTimeout(() => {
        conn.close()
      },10)
      console.log(" [x] Sent '%s'");
    } catch (error) {
      console.log(error);
    }
  }).catch(console.error);
};
