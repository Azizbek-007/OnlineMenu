import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { Member } from './entities/member.entity';

@Injectable()
export class MemberService {
  constructor (
    @InjectRepository(Member)
    private readonly MemberRepository: Repository<Member>
  ) {}
  
   async create(createMemberDto: CreateMemberDto) {

    try {
      const category =  this.MemberRepository.create(createMemberDto)
      return await this.MemberRepository.save(category);
    } catch (error) {
       if(error['errno'] == 1062) {
        throw new ConflictException();
       }
    }
  
  }

  async findAll() {
    const members = await this.MemberRepository.find();
    if(members.length == 0){
      throw new NotFoundException()
    }
    return members;
  }

  async update(id: string, updateMemberDto: UpdateMemberDto) {
    const member = await this.MemberRepository.findOneBy({ user_id: id });
  
      if (!member) {
        throw new NotFoundException(`There isn't any member with id: ${id}`);
      }
  
      this.MemberRepository.merge(member, updateMemberDto);
  
      return this.MemberRepository.save(member);
  }

}
