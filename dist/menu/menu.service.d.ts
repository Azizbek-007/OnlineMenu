import { Repository } from 'typeorm';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu } from './entities/menu.entity';
export declare class MenuService {
    private readonly MenuRepository;
    constructor(MenuRepository: Repository<Menu>);
    create(createMenuDto: CreateMenuDto): Promise<any>;
    search(data: string): Promise<any>;
    update(id: number, updateMenuDto: UpdateMenuDto): Promise<any>;
    remove(id: number): Promise<any>;
}
