/// <reference types="multer" />
import { MenuService } from './menu.service';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { FileUploadService } from './s3.service';
export declare class MenuController {
    private readonly menuService;
    private readonly FileUploadService;
    constructor(menuService: MenuService, FileUploadService: FileUploadService);
    create(file: Express.Multer.File, dto: any): Promise<import("./entities/menu.entity").Menu>;
    search(data: string): Promise<import("./entities/menu.entity").Menu[]>;
    update(id: number, updateMenuDto: UpdateMenuDto): Promise<import("./entities/menu.entity").Menu>;
    remove(id: number): Promise<import("./entities/menu.entity").Menu>;
}
