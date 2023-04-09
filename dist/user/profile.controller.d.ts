import { UserService } from './user.service';
import { UserUpdate } from './dto/user-update.dto';
import { User } from './entities/user.entity';
export declare class ProfileController {
    private readonly userService;
    constructor(userService: UserService);
    get(id: number): Promise<User>;
    update(id: number, updatesUser: UserUpdate): Promise<User>;
}
