import { Repository } from 'typeorm';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu } from './entities/menu.entity';
import { PoginationDto } from './dto/pogination.dto';
export declare class MenuService {
    private readonly MenuRepository;
    constructor(MenuRepository: Repository<Menu>);
    create(createMenuDto: CreateMenuDto): Promise<Menu>;
    search(data: string, query: PoginationDto): Promise<Menu[]>;
    update(id: number, updateMenuDto: UpdateMenuDto): Promise<Menu>;
    remove(id: number): Promise<Menu>;
}
