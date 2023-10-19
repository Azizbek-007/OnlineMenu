import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { FileUploadService } from './s3.service';
export declare class MenuController {
    private readonly menuService;
    private readonly FileUploadService;
    constructor(menuService: MenuService, FileUploadService: FileUploadService);
    create(dto: CreateMenuDto): Promise<import("./entities/menu.entity").Menu>;
    search(data: string): Promise<import("./entities/menu.entity").Menu[]>;
    update(id: number, dto: UpdateMenuDto): Promise<import("./entities/menu.entity").Menu>;
    remove(id: number): Promise<import("./entities/menu.entity").Menu>;
}
