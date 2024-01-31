import { Server } from 'ws';
export declare class ItemWsGateway {
    server: Server;
    broadcast(data: any): void;
}
