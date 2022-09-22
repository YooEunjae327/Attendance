import { ApiProperty } from '@nestjs/swagger';
import { IsEmpty, IsString } from 'class-validator';

export class MemberDto {
  @ApiProperty({ type: String, description: '이름' })
  @IsString()
  @IsEmpty()
  name!: string;

  @ApiProperty({ type: String, description: '반' })
  @IsString()
  @IsEmpty()
  grade!: number;

  @ApiProperty({ type: String, description: '번호' })
  @IsString()
  @IsEmpty()
  class!: number;

  @ApiProperty({ type: String, description: '생일, 필수 아님' })
  @IsString()
  birthday: string;

  @ApiProperty({ type: String, description: '이메일' })
  @IsString()
  @IsEmpty()
  email!: string;

  @ApiProperty({ type: String, description: '깃허브, 필수 아님' })
  @IsString()
  @IsEmpty()
  github: string;

  @ApiProperty({ type: String, description: '전화번호' })
  @IsString()
  @IsEmpty()
  phoneNumber: string;
}
