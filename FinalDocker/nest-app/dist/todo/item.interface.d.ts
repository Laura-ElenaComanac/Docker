import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';
export declare class Item implements InMemoryDBEntity {
    id: string;
    text: string;
    updated: number;
    version: number;
}
