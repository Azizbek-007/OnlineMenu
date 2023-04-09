import { Company } from 'src/company/entities/company.entity';
export declare class User {
    id: number;
    name: string;
    phone: string;
    password: string;
    company: Company | number;
    createdAt: Date;
    updatedAt: Date;
    constructor(data?: Partial<User>);
    hashPassword(): Promise<void>;
    checkPassword(plainPassword: string): Promise<boolean>;
}
