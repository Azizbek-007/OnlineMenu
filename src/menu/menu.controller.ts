import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, ParseIntPipe, UseGuards } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { MenuService } from './menu.service';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { FileStorage } from './file.storage';
import { FileUploadService } from './s3.service';
import { SessionAuthGuard } from 'src/auth/guards/session-auth.guard';
import { JWTAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('menu')
export class MenuController {
  constructor(
    private readonly menuService: MenuService,
    private readonly FileUploadService: FileUploadService
    ) {}

  @Post()
  // @UseGuards(SessionAuthGuard, JWTAuthGuard)
  @UseInterceptors(FileInterceptor('image', FileStorage))
  async create(
    @UploadedFile() file: Express.Multer.File,
    @Body() dto) {
    let aws_s3_location: string;
    file ? (aws_s3_location = await this.FileUploadService.upload(file)) : null;
    dto.avatar = aws_s3_location;
    console.log(aws_s3_location)
    console.log(dto)
    return this.menuService.create(dto);
  }

  @Get(':search')
  search(@Param('search') data: string) {
    return this.menuService.search(data)
  }

  @Patch(':id')
  // @UseGuards(SessionAuthGuard, JWTAuthGuard)
  @UseInterceptors(FileInterceptor('image', FileStorage))
  async update(
    @Param('id', ParseIntPipe) id: number,
    @UploadedFile() file: Express.Multer.File,  
    @Body() dto) {
      let aws_s3_location: string;
      file ? (aws_s3_location = await this.FileUploadService.upload(file)) : null;
      dto.avatar = aws_s3_location;
      console.log
      return this.menuService.update(id, dto);
  }

  @Delete(':id')
  // @UseGuards(SessionAuthGuard, JWTAuthGuard)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.menuService.remove(id);
  }
}
