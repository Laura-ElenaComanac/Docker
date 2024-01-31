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
    await consumeFromDurableQueueWithPrefetch();
    console.log('Waiting for messages. To exit press CTRL+C');
  } catch (err) {
    console.error(err);
  }

  async function consumeFromDurableQueueWithPrefetch() {
    const queue = 'task_queue';
    await channel.assertQueue(queue, { durable: true });
    channel.prefetch(1);
    channel.consume(queue, doWork, { noAck: false })
  }

  function doWork(msg) {
    var body = msg.content.toString();
    console.log("Received '%s'", body);
    var secs = body.split('.').length;
    setTimeout(function () {
      console.log("Done");
      channel.ack(msg);
    }, secs * 1000);
  }
})();
