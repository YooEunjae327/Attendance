import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiParam, ApiProperty, ApiResponse, ApiTags } from '@nestjs/swagger';
import DataResponse from 'src/common/response/DataResponse';
import Response from 'src/common/response/response';
import { AttendService } from './attend.service';
import { attendanceDto } from './dto/attendance.dto';
import { Attendance } from './entities/attendance.entity';

@ApiTags('Attend')
@Controller('attend')
export class AttendController {
  constructor(private readonly attendanceService: AttendService) {}

  @Post('post')
  @ApiProperty({ description: 'test' })
  @ApiResponse({ description: '출석 변경 완료' })
  async attendChange(@Body() dto: attendanceDto): Promise<Response> {
    await this.attendanceService.attendChange(dto);

    return Response.success(`출석 변경 완료`);
  }

  @Get('id/:id')
  @ApiResponse({
    status: 200,
    description: '오늘 출석함 or 오늘 출석하지 않음',
  })
  @ApiParam({
    name: 'id',
    required: true,
    description: '출석 요청을 보낸 유저 id',
  })
  async attendCheck(@Param() id: number): Promise<Response> {
    const attendCheck: number = await this.attendanceService.attendCheck(id);

    if (attendCheck == 1) {
      return Response.success('오늘 출석함');
    } else {
      return Response.success('오늘 출석하지 않음');
    }
  }

  @Get('list')
  @ApiResponse({
    status: 200,
    type: Attendance,
    isArray: true,
    description: '출석 여부 목록',
  })
  async attendList(): Promise<DataResponse<Attendance[]>> {
    const attendList: undefined | Attendance[] =
      await this.attendanceService.attendList();

    return DataResponse.dataSuccesss('출석 여부 목록', attendList);
  }
}
