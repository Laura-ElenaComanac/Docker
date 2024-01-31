const amqp = require('amqplib');

(async () => {
  let connection, channel;
  try {
    connection = await amqp.connect('amqp://localhost');
    channel = await connection.createChannel();
    await sendMessageToDurableQueue();
  } catch (err) {
    console.error(err);
  } finally {
    await channel.close();
    await connection.close();
  }

  async function sendMessageToDurableQueue() {
    const queue = 'task_queue';
    await channel.assertQueue(queue, { durable: true });
    const message = process.argv.slice(2).join(' ') || "Hello World!";
    await channel.sendToQueue(queue, Buffer.from(message), { persistent: true });
    console.log('Sent ', message);
  }
})();
