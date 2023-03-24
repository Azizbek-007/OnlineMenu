import * as bcrypt from 'bcryptjs';
import { Exclude } from 'class-transformer';
import { Branche } from 'src/branche/entities/branche.entity';
import { Company } from 'src/company/entities/company.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  ManyToOne,
} from 'typeorm';
import { Role } from '../utils/role.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  phone: string;

  @Column()
  @Exclude()
  password: string;

  @ManyToOne(type => Company, { nullable: true, createForeignKeyConstraints: false })
  @Exclude()
  company: Company | number;

  @ManyToOne(type => Branche, (branche) => branche.employee, { nullable: true })
  branche: Branche | number;
 
  @Column({
    type: 'enum',
    enum: Role,
    nullable: false
  })
  role: Role;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  constructor(data: Partial<User> = {}) {
    Object.assign(this, data);
  }

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword(): Promise<void> {
    const salt = await bcrypt.genSalt();
    if (!/^\$2[abxy]?\$\d+\$/.test(this.password)) {
      this.password = await bcrypt.hash(this.password, salt);
    }
  }

  async checkPassword(plainPassword: string): Promise<boolean> {
    return await bcrypt.compare(plainPassword, this.password);
  }
}
