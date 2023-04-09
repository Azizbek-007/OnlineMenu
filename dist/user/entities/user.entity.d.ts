import { BaseEntity } from 'typeorm';
import { Role } from '../utils/role.enum';
export declare class User extends BaseEntity {
    id: number;
    name: string;
    restoran_name: string;
    phone: string;
    password: string;
    role: Role;
    createdAt: Date;
    updatedAt: Date;
    hashPassword(): Promise<void>;
    checkPassword(plainPassword: string): Promise<boolean>;
}
