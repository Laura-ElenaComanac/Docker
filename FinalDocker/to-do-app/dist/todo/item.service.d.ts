import { Item } from './item.interface';
import { CreateItem } from './create-item.dto';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
export declare class ItemService {
    private readonly db;
    constructor(db: InMemoryDBService<Item>);
    findAll(): Item[];
    findOne(id: string): Item;
    create(dto: CreateItem): Item;
    update(item: Item): Item;
    delete(id: string): void;
}
