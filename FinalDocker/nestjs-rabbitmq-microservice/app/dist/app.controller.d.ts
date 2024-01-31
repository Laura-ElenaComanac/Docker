import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
export declare class AppController {
    private readonly client;
    constructor(client: ClientProxy);
    onApplicationBootstrap(): Promise<void>;
    getHello(): string;
    getSum(): Observable<number>;
}
