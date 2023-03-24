import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { Company } from './entities/company.entity';

@Injectable()
export class CompanyService {
  constructor (  
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>
  ) {}

  async create(createCompanyDto: CreateCompanyDto) {
    const findCompany = await this.findCompany();
    if(!findCompany){
      const company =  this.companyRepository.create(createCompanyDto);
      return await this.companyRepository.save(company);
    }
    throw new ConflictException('Exist');
  }
  async findCompany(): Promise<false | Company> {
    const company = await this.companyRepository.findOneBy({ id: 1 });
    return company ? company : false;
  }
  async CompanyBy() {
    const company = await this.findCompany();
    if(!company) {
      throw new NotFoundException("Not Found Company")
    }
    return company;
  }

  async update(updateCompanyDto: UpdateCompanyDto) {
    const findCompany = await this.findCompany();
    if(!findCompany) {
      throw new NotFoundException("Not Found Company")
    }

    this.companyRepository.merge(findCompany, updateCompanyDto);

    return this.companyRepository.save(findCompany);
    
  }

}
