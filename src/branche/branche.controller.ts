import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { JWTAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { SessionAuthGuard } from 'src/auth/guards/session-auth.guard';
import { Roles } from 'src/user/decorators/role.decorator';
import { Role } from 'src/user/utils/role.enum';
import { BrancheService } from './branche.service';
import { CreateBrancheDto } from './dto/create-branche.dto';
import { UpdateBrancheDto } from './dto/update-branche.dto';

@Controller('branche')
export class BrancheController {
  constructor(private readonly brancheService: BrancheService) {}

  @Post()
  @UseGuards(SessionAuthGuard, JWTAuthGuard, RolesGuard)
  @Roles(Role['Ceo'])
  create(@Body() createBrancheDto: CreateBrancheDto) {
    return this.brancheService.create(createBrancheDto);
  }

  @Get()
  @UseGuards(SessionAuthGuard, JWTAuthGuard)
  findAll() {
    return this.brancheService.findAll();
  }

  @Get(':id')
  @UseGuards(SessionAuthGuard, JWTAuthGuard)
  findOne(@Param('id', new ParseIntPipe()) id: number) {
    return this.brancheService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(SessionAuthGuard, JWTAuthGuard, RolesGuard)
  @Roles(Role['Ceo'])
  update(@Param('id', new ParseIntPipe()) id: number, @Body() updateBrancheDto: UpdateBrancheDto) {
    return this.brancheService.update(id, updateBrancheDto);
  }

  @Delete(':id')
  @UseGuards(SessionAuthGuard, JWTAuthGuard, RolesGuard)
  @Roles(Role['Ceo'])
  remove(@Param('id', new ParseIntPipe()) id: number) {
    return this.brancheService.remove(id);
  }
}
