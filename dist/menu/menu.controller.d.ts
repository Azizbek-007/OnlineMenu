/// <reference types="multer" />
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { FileUploadService } from './s3.service';
export declare class MenuController {
    private readonly menuService;
    private readonly FileUploadService;
    constructor(menuService: MenuService, FileUploadService: FileUploadService);
    create(file: Express.Multer.File, dto: CreateMenuDto): Promise<import("./entities/menu.entity").Menu>;
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
    update(id: number, file: Express.Multer.File, dto: any): Promise<import("./entities/menu.entity").Menu>;
    remove(id: number): Promise<import("./entities/menu.entity").Menu>;
}
