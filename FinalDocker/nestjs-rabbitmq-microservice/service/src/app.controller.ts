import { Controller, Get } from '@nestjs/common';
import { Ctx, EventPattern, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor() { }

  @EventPattern('hello-event')
  async handleHelloEvent(data: Record<string, unknown>) {
    console.log('event...', data.text);
  }

  @MessagePattern('hello-message')
  handleHelloMessage(@Payload() data: number[], @Ctx() context: RmqContext): number {
    console.log('message...', context.getMessage());
    return (data || []).reduce((a, b) => a + b);
  }
}
