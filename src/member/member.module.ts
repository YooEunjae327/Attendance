import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { attendanceRepository } from 'src/attend/repositories/attendance.repository';
import { UserController } from './member.controller';
import { MemeberService } from './member.service';
import { MemberRepository } from './repositories/member.repository';

@Module({
  imports: [TypeOrmModule.forFeature([MemberRepository, attendanceRepository])],
  controllers: [UserController],
  providers: [MemeberService],
  exports: [MemeberService],
})
export class MemberModule {}
