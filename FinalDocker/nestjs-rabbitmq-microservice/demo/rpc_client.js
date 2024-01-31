const uuid = require('node-uuid');
const amqp = require('amqplib');

(async () => {
  let connection, channel;
  try {
    connection = await amqp.connect('amqp://localhost');
    channel = await connection.createChannel();
    console.log(await sayHello('John'));
  } catch (err) {
    console.error(err);
  } finally {
    await channel.close();
    await connection.close();
  }

  async function sayHello(name) {
    return new Promise(async resolve => {
      const replyToQueue = await channel.assertQueue('', { exclusive: true });
      const correlationId = uuid();
      channel.consume(replyToQueue.queue, msg => {
        if (msg.properties.correlationId === correlationId) {
          resolve(msg.content.toString());
        }
      }, { noAck: true });
      channel.sendToQueue('rpc_queue', Buffer.from(name), {
          correlationId,
          replyTo: replyToQueue.queue
      });
    });
  }
})();
