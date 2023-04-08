import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {
  constructor (
    @InjectRepository(Category)
    private readonly CategoryRepository: Repository<Category>
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const category =  this.CategoryRepository.create(createCategoryDto)
    return await this.CategoryRepository.save(category);
  }

  async findAll(): Promise<Category[]> {
    const categories = await this.CategoryRepository.find({
      relations: {
        menu: true
      }
    });
    if(categories.length == 0){
      throw new NotFoundException()
    }
    return categories;
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
