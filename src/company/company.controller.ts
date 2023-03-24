import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { JWTAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { SessionAuthGuard } from 'src/auth/guards/session-auth.guard';
import { Roles } from 'src/user/decorators/role.decorator';
import { Role } from 'src/user/utils/role.enum';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  // create company 
  @Post()
  @UseGuards(SessionAuthGuard, JWTAuthGuard, RolesGuard)
  @Roles(Role['Ceo'])
  create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companyService.create(createCompanyDto);
  }

  @Get()
  @UseGuards(SessionAuthGuard, JWTAuthGuard)
  findCompany() {
    return this.companyService.CompanyBy();
  }

  @Patch()
  @UseGuards(SessionAuthGuard, JWTAuthGuard, RolesGuard)
  @Roles(Role['Ceo'])
  update(@Body() updateCompanyDto: UpdateCompanyDto) {
    return this.companyService.update(updateCompanyDto);
  }

}
