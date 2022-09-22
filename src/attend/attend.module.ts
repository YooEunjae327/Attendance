import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MemberRepository } from 'src/member/repositories/member.repository';
import { AttendController } from './attend.controller';
import { AttendService } from './attend.service';
import { attendanceRepository } from './repositories/attendance.repository';

@Module({
  imports: [TypeOrmModule.forFeature([attendanceRepository, MemberRepository])],
  controllers: [AttendController],
  providers: [AttendService],
})
export class AttendModule {}
