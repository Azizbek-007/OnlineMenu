import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { baseUrl } from 'src/data-source';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly CategoryRepository: Repository<Category>
  ) { }

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const category = this.CategoryRepository.create(createCategoryDto)
    return await this.CategoryRepository.save(category);
  }

  async findAll() {
    const categories = await this.CategoryRepository.find({
      relations: {
        menu: true
      }
    });
    if (categories.length == 0) {
      throw new NotFoundException()
    }
    // const responseData = categories.map(category => {
    //   return {
    //     id: category.id,
    //     name: category.name,
    //     menu: category.menu.map(menu => {
    //       return {
    //         id: menu.id,
    //         name: menu.name,
    //         price: menu.price,
    //         avatar: menu.avatar ? `${baseUrl}/uploads/${menu.avatar}` : null,
    //         category: menu.category
    //       }
    //     })
    //   }
    // })
    return categories;
  }

  async findOne(id: number) {
    console.log('ok')
    const category = await this.CategoryRepository.findOne({
      relations: {
        menu: true
      },
      where: { id }
    });

    if (!category) {
      throw new NotFoundException(`There isn't any category with id: ${id}`);
    }
    return category;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.CategoryRepository.findOneBy({ id });

    if (!category) {
      throw new NotFoundException(`There isn't any category with id: ${id}`);
    }

    this.CategoryRepository.merge(category, updateCategoryDto);

    return this.CategoryRepository.save(category);
  }

  async remove(id: number) {
    const category = await this.CategoryRepository.findOneBy({ id });

    if (!category) {
      throw new NotFoundException(`There isn't any category with id: ${id}`);
    }

    return this.CategoryRepository.remove(category);
  }
}
