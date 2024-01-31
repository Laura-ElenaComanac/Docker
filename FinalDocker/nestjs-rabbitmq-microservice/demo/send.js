const amqp = require('amqplib');

(async () => {
  let connection, channel;
  try {
    connection = await amqp.connect('amqp://localhost');
    channel = await connection.createChannel();
    await sendMessageToQueue();
  } catch (err) {
    console.error(err);
  } finally {
    await channel.close();
    await connection.close();
  }

  async function sendMessageToQueue() {
    const queue = 'hello';
    await channel.assertQueue(queue, { durable: false });
    const message = 'Hello World!';
    await channel.sendToQueue(queue, Buffer.from(message));
    console.log('Sent ', message);
  }
})();
