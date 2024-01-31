import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Message } from './message.event';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(@Inject('HELLO_SERVICE') private readonly client: ClientProxy) { }

  async onApplicationBootstrap() {
  }

  @Get('hello-event')
  getHello() {
    this.client.emit<any>('hello-event', new Message('Hello World'));
    return 'Hello World printed';
  }

  @Get('hello-message')
  getSum(): Observable<number> {
    const data = [1, 2, 3, 4, 5];
    console.log('getSum...');
    return this.client.send<number>('hello-message', data); // req-res
  }
}
