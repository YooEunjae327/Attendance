import { ApiProperty } from '@nestjs/swagger';
import { IsEmpty, IsString } from 'class-validator';

export class attendanceDto {
  @ApiProperty({
    type: Number,
    description: 'Attend 기본키, 유저 기본키랑 같음',
    example: 1,
  })
  @IsString()
  @IsEmpty()
  id!: number;

  @ApiProperty({ type: Number, description: '출석 여부', example: '1' })
  @IsString()
  @IsEmpty()
  isAttend!: number;
}
