import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, ParseIntPipe, UseGuards, ParseFilePipe, MaxFileSizeValidator, FileTypeValidator } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { FileStorage } from './file.storage';
import { FileUploadService } from './s3.service';
import { SessionAuthGuard } from 'src/auth/guards/session-auth.guard';
import { JWTAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { diskStorage } from 'multer';

@Controller('menu')
export class MenuController {
  constructor(
    private readonly menuService: MenuService,
    private readonly FileUploadService: FileUploadService
  ) { }

  @Post()
  // @UseGuards(SessionAuthGuard, JWTAuthGuard)
  // @UseInterceptors(FileInterceptor('image', {
  //   storage: diskStorage({
  //     destination: './uploads',
  //     filename: (req, file, cb) => {
  //       const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
  //       return cb(null, `${randomName}${file.originalname}`)
  //     }
  //   })
  // }))
  async create(
    // @UploadedFile(
    //   new ParseFilePipe({
    //     fileIsRequired: true,
    //     validators: [
    //       new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 2 }),
    //       new FileTypeValidator({ fileType: /(jpg|jpeg|png|gif)$/ }),
    //     ]
    //   })
    // ) file: Express.Multer.File,
    @Body() dto: CreateMenuDto) {
    console.log(dto)
    // dto.avatar = file.filename;
    return this.menuService.create(dto);
  }

  @Get(':search')
  search(@Param('search') data: string) {
    return this.menuService.search(data)
  }

  @Patch(':id')
  // @UseGuards(SessionAuthGuard, JWTAuthGuard)
  // @UseInterceptors(FileInterceptor('image', {
  //   storage: diskStorage({
  //     destination: './uploads',
  //     filename: (req, file, cb) => {
  //       const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
  //       return cb(null, `${randomName}${file.originalname}`)
  //     }
  //   })
  // }))
  async update(
    @Param('id', ParseIntPipe) id: number,
    // @UploadedFile(
    //   new ParseFilePipe({
    //     fileIsRequired: false,
    //     validators: [
    //       new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 2 }),
    //       new FileTypeValidator({ fileType: /(jpg|jpeg|png|gif)$/ }),
    //     ]
    //   })
    // ) file: Express.Multer.File,
    @Body() dto: UpdateMenuDto) {
    return this.menuService.update(id, dto);
  }

  @Delete(':id')
  // @UseGuards(SessionAuthGuard, JWTAuthGuard)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.menuService.remove(id);
  }
}
