"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const microservices_1 = require("@nestjs/microservices");
const config_1 = require("./config");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: [`amqp://guest:guest@${config_1.rabbitmqHost}:5672`],
            queue: 'user-messages',
            queueOptions: {
                durable: false,
            },
        },
    });
    await app.listen();
    console.log('Microservice is listening');
}
bootstrap();
//# sourceMappingURL=main.js.map