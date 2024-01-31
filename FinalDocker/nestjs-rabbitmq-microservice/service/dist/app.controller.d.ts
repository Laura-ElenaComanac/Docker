import { RmqContext } from '@nestjs/microservices';
export declare class AppController {
    constructor();
    handleHelloEvent(data: Record<string, unknown>): Promise<void>;
    handleHelloMessage(data: number[], context: RmqContext): number;
}
