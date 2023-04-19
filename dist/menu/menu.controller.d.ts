import { MenuService } from './menu.service';
import { FileUploadService } from './s3.service';
export declare class MenuController {
    private readonly menuService;
    private readonly FileUploadService;
    constructor(menuService: MenuService, FileUploadService: FileUploadService);
    create(file: Express.Multer.File, dto: any): Promise<any>;
    search(data: string): Promise<any>;
    update(id: number, file: Express.Multer.File, dto: any): Promise<any>;
    remove(id: number): Promise<any>;
}
