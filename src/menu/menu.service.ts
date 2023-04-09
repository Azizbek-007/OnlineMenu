import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu } from './entities/menu.entity';

@Injectable()
export class MenuService {
  constructor(
    @InjectRepository(Menu)
    private readonly MenuRepository: Repository<Menu>
  ) {}

  async create(createMenuDto: CreateMenuDto) {
    const menu =  this.MenuRepository.create(createMenuDto)
    return await this.MenuRepository.save(menu);
  }

  async search(data: string) {
    if(data == ':search') {
      const result = await this.MenuRepository.find();
      return result
    }
    const result = await this.MenuRepository.find({ 
      where: {
        name: Like("%" + data + "%")
      }
    });
    return result;
  }

  async update(id: number, updateMenuDto: UpdateMenuDto) {
    const menu = await this.MenuRepository.findOneBy({ id });

    if (!menu) {
      throw new NotFoundException(`There isn't any menu with id: ${id}`);
    }

    this.MenuRepository.merge(menu, updateMenuDto);

    return this.MenuRepository.save(menu);
  }

  async remove(id: number) {
    const category = await this.MenuRepository.findOneBy({ id });

    if (!category) {
      throw new NotFoundException(`There isn't any menu with id: ${id}`);
    }

    return this.MenuRepository.remove(category)
  }
}
