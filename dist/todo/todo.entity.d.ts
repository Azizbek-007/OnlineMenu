import { User } from '../user/entities/user.entity';
export declare class Todo {
    id: number;
    text: string;
    done: boolean;
    owner: User | number;
    createdAt: Date;
    updatedAt: Date;
}
