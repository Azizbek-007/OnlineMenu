import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBrancheDto } from './dto/create-branche.dto';
import { UpdateBrancheDto } from './dto/update-branche.dto';
import { Branche } from './entities/branche.entity';

@Injectable()
export class BrancheService {
  constructor(
    @InjectRepository(Branche)
    private readonly brancheRepistory: Repository<Branche>
  ) {

  }
  async create(createBrancheDto: CreateBrancheDto) {
    const branche = this.brancheRepistory.create(createBrancheDto);
    return await this.brancheRepistory.save(branche);
  }

  async findAll() {
    const branches = await this.brancheRepistory.find();
    if(branches.length == 0) {
      throw new NotFoundException();
    }
    return branches;
  }

  async findOne(id: number) {
    const branche = await this.brancheRepistory.findOne({
      relations: { employee: true },
      where: { id },
      select: {
        employee: {
          id: true,
          name: true,
          phone: true,
          role: true
        }
      }
    });
    if(!branche) {
      throw new NotFoundException();
    }
    return branche;
  }

  async update(id: number, updateBrancheDto: UpdateBrancheDto) {
    const branche = await this.findOne(id);
    this.brancheRepistory.merge(branche, updateBrancheDto);
    return this.brancheRepistory.save(branche);
  }

  async remove(id: number) {
    const branche = await this.findOne(id);
    return this.brancheRepistory.remove(branche);
  }
}
