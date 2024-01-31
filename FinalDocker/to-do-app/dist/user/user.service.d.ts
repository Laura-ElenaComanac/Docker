import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { User } from './user';
export declare class UserService {
    private readonly db;
    constructor(db: InMemoryDBService<User>);
    findOne(username: string): Promise<User | undefined>;
}
