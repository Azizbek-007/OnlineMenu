import { Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
export declare class CategoryService {
    private readonly CategoryRepository;
    constructor(CategoryRepository: Repository<Category>);
    create(createCategoryDto: CreateCategoryDto): Promise<Category>;
    findAll(): Promise<Category[]>;
    findOne(id: number): Promise<any>;
    update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<any>;
    remove(id: number): Promise<any>;
}
