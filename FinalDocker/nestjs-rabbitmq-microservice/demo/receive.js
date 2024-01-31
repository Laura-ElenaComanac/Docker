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
    await consumeMessagesFromQueue();
    console.log('Waiting for messages. To exit press CTRL+C');
  } catch (err) {
    console.error(err);
  }

  async function consumeMessagesFromQueue() {
    const queue = 'hello';
    await channel.assertQueue(queue, { durable: false });
    channel.consume(queue, msg => {
      console.log('Received ', msg.content.toString());
    }, { noAck: true })
  }
})();
