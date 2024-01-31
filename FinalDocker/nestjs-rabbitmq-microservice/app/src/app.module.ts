import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Transport, ClientsModule } from '@nestjs/microservices';
import { rabbitmqHost } from './config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HELLO_SERVICE', transport: Transport.RMQ,
        options: {
          urls: [`amqp://guest:guest@${rabbitmqHost}:5672`],
          queue: 'user-messages',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

}
