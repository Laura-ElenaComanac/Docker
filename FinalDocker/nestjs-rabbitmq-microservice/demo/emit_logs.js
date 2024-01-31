const amqp = require('amqplib');

(async () => {
  let connection, channel;
  try {
    connection = await amqp.connect('amqp://localhost');
    channel = await connection.createChannel();
    await demoFanout()
  } catch (err) {
    console.error(err);
  } finally {
    await channel.close();
    await connection.close();
  }

  async function demoFanout() {
    const exchange = 'logs';
    await channel.assertExchange(exchange, 'fanout', { durable: false });
    const msg = 'You got a message!';
    channel.publish(exchange, '', Buffer.from(msg));
    console.log("Sent %s", msg);
  }
})();
