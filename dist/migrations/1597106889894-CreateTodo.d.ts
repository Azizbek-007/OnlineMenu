import { MigrationInterface, QueryRunner } from 'typeorm';
export declare class CreateTodo1597106889894 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
