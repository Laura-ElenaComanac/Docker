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
    await consumeTopicExchange();
    console.log('Waiting for messages. To exit press CTRL+C');
  } catch (err) {
    console.error(err);
  }

  /**
   * To receive all the logs: node receive_logs_topic.js "#"
   * To receive all logs from the facility kern: node receive_logs_topic.js "kern.*"
   * Or if you want to hear only about "critical" logs: node receive_logs_topic.js "*.critical"
   * You can create multiple bindings: node receive_logs_topic.js "kern.*" "*.critical"
   */
  async function consumeTopicExchange() {
    const exchange = 'topic_logs';
    await channel.assertExchange(exchange, 'topic', { durable: false });
    const q = channel.assertQueue('', { exclusive: true });
    var args = process.argv.slice(2);
    args.forEach(key => {
      channel.bindQueue(q.queue, exchange, key);
    })
    channel.consume(q.queue, msg => {
      console.log('Received ', msg.fields.routingKey, msg.content.toString());
    }, { noAck: true });
  }
})();
