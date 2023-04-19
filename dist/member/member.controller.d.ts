import { MemberService } from './member.service';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
export declare class MemberController {
    private readonly memberService;
    constructor(memberService: MemberService);
    create(createMemberDto: CreateMemberDto): Promise<any>;
    findAll(): Promise<any>;
    update(id: string, updateMemberDto: UpdateMemberDto): Promise<any>;
}
