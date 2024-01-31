#!/usr/bin/env node

const amqp = require('amqplib');

(async () => {
  let connection, channel;
  try {
    connection = await amqp.connect('amqp://localhost');
    channel = await connection.createChannel();
    process.once('SIGINT', () => {
      channel.close();
      connection.close();
    });
    await demoFanout();
    console.log('Waiting for messages. To exit press CTRL+C');
  } catch (err) {
    console.error(err);
  }

  async function demoFanout() {
    const exchange = 'logs';
    await channel.assertExchange(exchange, 'fanout', { durable: false });
    const q = channel.assertQueue('', { exclusive: true });
    channel.bindQueue(q.queue, exchange, '');
    channel.consume(q.queue, msg => {
      console.log('Received ', msg.content.toString());
    }, { noAck: true });
  }
})();
