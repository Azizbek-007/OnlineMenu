import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    UpdateDateColumn,
    CreateDateColumn,
} from 'typeorm';
  
@Entity()
export class Company {
    @PrimaryGeneratedColumn('increment')
    id: number;
  
    @Column()
    name: string;

    @Column({ nullable: true })
    avatar: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
}
  