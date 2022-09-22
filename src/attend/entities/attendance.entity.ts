import { ApiProperty } from '@nestjs/swagger';
import { Member } from 'src/member/entities/member.entitiy';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Attendance {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: '1' })
  @Column({ default: 0, type: 'tinyint', name: 'is_attend' })
  isAttend!: number;

  @ApiProperty({
    isArray: true,
    example: {
      data: {
        id: 2,
        name: '유은재',
        grade: 2,
        class: 2,
        birthday: '3월27일',
        email: 'tomato4117@naver.com',
        github: 'http://github.com',
        phoneNumber: '01065037875',
      },
    },
  })
  @OneToOne(() => Member)
  @JoinColumn()
  member!: Member;
}
