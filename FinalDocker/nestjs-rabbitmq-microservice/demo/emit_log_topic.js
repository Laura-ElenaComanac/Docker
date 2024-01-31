const amqp = require('amqplib');

(async () => {
  let connection, channel;
  try {
    connection = await amqp.connect('amqp://localhost');
    channel = await connection.createChannel();
    await publishToTopicExchange();
  } catch (err) {
    console.error(err);
  } finally {
    await channel.close();
    await connection.close();
  }

  // node emit_log_topic.js "kern.critical" "A critical kernel error"
  async function publishToTopicExchange() {
    const exchange = 'topic_logs';
    await channel.assertExchange(exchange, 'topic', { durable: false });
    const args = process.argv.slice(2);
    const key = (args.length > 0) ? args[0] : 'anonymous.info';
    const msg = args.slice(1).join(' ') || 'Hello World!';
    channel.publish(exchange, key, Buffer.from(msg));
    console.log("Sent %s %s", key, msg);
  }
})();
