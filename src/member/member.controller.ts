import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import DataResponse from 'src/common/response/DataResponse';
import Response from 'src/common/response/response';
import { MemberDto } from './dto/member.dto';
import { Member } from './entities/member.entitiy';
import { MemeberService } from './member.service';

@ApiTags('Member')
@Controller('member')
export class UserController {
  constructor(private readonly memberService: MemeberService) {}

  @Post('add')
  @ApiCreatedResponse({ description: '멤버 등록됨.' })
  async register(@Body() dto: MemberDto): Promise<Response> {
    await this.memberService.register(dto);

    return Response.success('멤버 등록됨.');
  }

  @Get('list')
  @ApiResponse({
    status: 200,
    type: Member,
    isArray: true,
    description: '멤버 불러오기 ',
  })
  async list(): Promise<DataResponse<Member[]>> {
    const list = await this.memberService.list();

    return DataResponse.dataSuccesss('멤버 불러오기 ', list);
  }
}
