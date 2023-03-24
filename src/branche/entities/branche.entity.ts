import { Exclude } from "class-transformer";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Branche {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @OneToMany(() => User, (user) => user.branche)
    @Exclude()
    employee: User[];

    @Column()
    name: string;

    @Column()
    adress: string;

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date

}
