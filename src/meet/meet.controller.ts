import { Controller, Get, Post, Body, Param, Delete, Put, Query } from '@nestjs/common';
import { MeetService } from './meet.service';
import { CreateMeetDto } from './dto/create-meet.dto';
import { UpdateMeetDto } from './dto/update-meet.dto';

@Controller('meet')
export class MeetController {
  constructor(private readonly meetService: MeetService) {}

  @Post()
  create(@Body() createMeetDto: CreateMeetDto) {
    return this.meetService.create(createMeetDto);
  }

  @Get()
  findAll(@Query('filters') filters: Object, @Query('relations') relations: Array<string>) {
    return this.meetService.findAll(relations, filters);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Query('relations') relations: Array<string>) {
    return this.meetService.findOne(+id, relations);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMeetDto: UpdateMeetDto) {
    return this.meetService.update(+id, updateMeetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.meetService.remove(+id);
  }
}
