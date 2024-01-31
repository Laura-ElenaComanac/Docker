import { ItemService } from './item.service';
import { Item } from './item.interface';
import { CreateItem } from './create-item.dto';
import { ItemWsGateway } from './item-ws.gateway';
export declare class ItemController {
    private readonly itemService;
    private readonly itemWsGateway;
    constructor(itemService: ItemService, itemWsGateway: ItemWsGateway);
    findAll(): Promise<Item[]>;
    findOne(id: string): Promise<Item>;
    create(dto: CreateItem): Promise<Item>;
    update(item: Item): Promise<Item>;
    delete(id: string): Promise<void>;
}
