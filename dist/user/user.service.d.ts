import { Repository, FindOneOptions } from 'typeorm';
import { User } from './entities/user.entity';
import { UserUpdate } from './dto/user-update.dto';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    create(data: Partial<User>): Promise<User>;
    findOne(where: FindOneOptions<User>): Promise<User>;
    update(id: number, updates: UserUpdate): Promise<User>;
}
