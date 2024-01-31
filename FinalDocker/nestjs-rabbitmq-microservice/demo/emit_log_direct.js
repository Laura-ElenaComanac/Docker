const amqp = require('amqplib');

(async () => {
  let connection, channel;
  try {
    connection = await amqp.connect('amqp://localhost');
    channel = await connection.createChannel();
    await publishToDirectExchange()
  } catch (err) {
    console.error(err);
  } finally {
    await channel.close();
    await connection.close();
  }

  async function publishToDirectExchange() {
    const exchange = 'direct_logs';
    await channel.assertExchange(exchange, 'direct', { durable: false });
    var args = process.argv.slice(2);
    var msg = args.slice(1).join(' ');
    var severity = (args.length > 0) ? args[0] : 'info';
    channel.publish(exchange, severity, Buffer.from(msg));
    console.log("Sent %s %s", severity, msg);
  }
})();
