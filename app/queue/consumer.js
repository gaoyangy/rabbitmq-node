'use strict';
const amqplib = require('amqplib');

exports.send = function() {
    amqplib.connect('amqp://127.0.0.1').then(async conn => {
        process.once('SIGN',function(){
            conn.close();
          });
        try {
            const channel = await conn.createChannel();
            await channel.assertQueue('api', { durable: false });
            channel.consume('api', msg => {
                console.log('000000')
                console.log("[x] Received '%s'",msg.content.toString(), 111111111111);
            }, { noAck: true})
            console.log('[*] Waiting for message. To exit press CRTL+C');
        } catch (error) {
            throw Error(error);
        }
    }).catch(console.error);
};