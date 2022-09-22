import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { attendanceRepository } from 'src/attend/repositories/attendance.repository';
import DataResponse from 'src/common/response/DataResponse';
import { MemberDto } from './dto/member.dto';
import { Member } from './entities/member.entitiy';
import { MemberRepository } from './repositories/member.repository';

@Injectable()
export class MemeberService {
  constructor(
    private readonly memberRepository: MemberRepository,
    private readonly attendanceRepsoitory: attendanceRepository,
  ) {}

  public async register(dto: MemberDto): Promise<void> {
    const a = await this.memberRepository.save(dto);
    const att = this.attendanceRepsoitory.create({ member: a });
    await this.attendanceRepsoitory.save(att);
  }

  public async list(): Promise<Member[]> {
    return await this.memberRepository.find();
  }
}
