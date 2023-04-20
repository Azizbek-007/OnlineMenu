import { Repository } from 'typeorm';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { Member } from './entities/member.entity';
export declare class MemberService {
    private readonly MemberRepository;
    constructor(MemberRepository: Repository<Member>);
    create(createMemberDto: CreateMemberDto): Promise<Member>;
    findAll(): Promise<Member[]>;
    update(id: string, updateMemberDto: UpdateMemberDto): Promise<Member>;
}
