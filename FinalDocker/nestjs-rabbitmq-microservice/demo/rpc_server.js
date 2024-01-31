const amqp = require('amqplib');

(async () => {
  let connection, channel;
  try {
    connection = await amqp.connect('amqp://localhost');
    channel = await connection.createChannel();
    channel.prefetch(1);
    process.once('SIGINT', () => {
      channel.close();
      connection.close();
    });
    const queue = 'rpc_queue';
    await channel.assertQueue(queue, { durable: false });
    channel.consume(queue, msg => {
      const name = msg.content.toString();
      console.log('Received ', name);
      channel.sendToQueue(
        msg.properties.replyTo,
        Buffer.from(`Hello ${name}`), { correlationId: msg.properties.correlationId }
      );
      channel.ack(msg);
    })
    console.log('To exit press CTRL+C');
  } catch (err) {
    console.error(err);
  }
})();
