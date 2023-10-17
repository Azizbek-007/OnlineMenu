import { Repository } from 'typeorm';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu } from './entities/menu.entity';
export declare class MenuService {
    private readonly MenuRepository;
    constructor(MenuRepository: Repository<Menu>);
    create(createMenuDto: CreateMenuDto): Promise<Menu>;
    search(data: string): Promise<{
        avatar: string;
        id: number;
        name: string;
        description: string;
        price: string;
        sale: number;
        category: import("../category/entities/category.entity").Category;
        product: import("../orderproducts/entities/orderproduct.entity").Orderproduct;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date;
    }[]>;
    update(id: number, updateMenuDto: UpdateMenuDto): Promise<Menu>;
    remove(id: number): Promise<Menu>;
}
