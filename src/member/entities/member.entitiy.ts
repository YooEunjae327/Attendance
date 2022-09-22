import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Member {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  id!: number;

  @ApiProperty({ example: '김건호' })
  @Column({ length: 64 })
  name!: string;

  @ApiProperty({ example: '2' })
  @Column()
  grade!: number;

  @ApiProperty({ example: '1' })
  @Column()
  class!: number;

  @ApiProperty({ example: '0615' })
  @Column({ length: 16, nullable: true })
  birthday: string;

  @ApiProperty({ example: 'example@gmail.com' })
  @Column({ length: 128 })
  email!: string;

  @ApiProperty({ example: 'github.com' })
  @Column({ length: 64, nullable: true })
  github: string;

  @ApiProperty({ example: '010-1234-5678' })
  @Column({ length: 32 })
  phoneNumber!: string;
}
