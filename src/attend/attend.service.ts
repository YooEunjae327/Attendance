import { Injectable, UnauthorizedException } from '@nestjs/common';
import Response from 'src/common/response/response';
import { Member } from 'src/member/entities/member.entitiy';
import { MemberRepository } from 'src/member/repositories/member.repository';
import { attendanceDto } from './dto/attendance.dto';
import { Attendance } from './entities/attendance.entity';
import { attendanceRepository } from './repositories/attendance.repository';

@Injectable()
export class AttendService {
  constructor(
    private readonly attendanceRespository: attendanceRepository,
    private readonly memberRespository: MemberRepository,
  ) {}

  public async attendChange(dto: attendanceDto): Promise<void> {
    const att = await this.attendanceRespository.findOne({ id: dto.id });

    await this.attendanceRespository.update(att, dto);
  }

  public async attendCheck(id: number): Promise<number> {
    const attend: undefined | Attendance =
      await this.attendanceRespository.findOne({ id });
    console.log(attend);

    if (!attend) {
      throw new UnauthorizedException('존재하지 않는 유저입니다.');
    }

    return attend.isAttend;
  }

  public async attendList(): Promise<Attendance[]> {
    return await this.attendanceRespository.find({ relations: ['member'] });
  }
}
