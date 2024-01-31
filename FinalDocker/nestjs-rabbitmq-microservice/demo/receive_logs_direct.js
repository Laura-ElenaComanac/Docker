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
    await consumeDirectExchange();
    console.log('Waiting for messages. To exit press CTRL+C');
  } catch (err) {
    console.error(err);
  }

  async function consumeDirectExchange() {
    const exchange = 'direct_logs';
    await channel.assertExchange(exchange, 'direct', { durable: false });
    const q = channel.assertQueue('', { exclusive: true });
    var args = process.argv.slice(2);
    args.forEach(severity => {
      channel.bindQueue(q.queue, exchange, severity);
    })
    channel.consume(q.queue, msg => {
      console.log('Received ', msg.content.toString());
    }, { noAck: true });
  }
})();
