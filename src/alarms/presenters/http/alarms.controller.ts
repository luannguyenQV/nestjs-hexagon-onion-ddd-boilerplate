import { Controller, Get, Post, Body } from '@nestjs/common';
import { AlarmsService } from '../../application/alarms.service';
import { CreateAlarmDto } from './dto/create-alarm.dto';
import { CreateAlarmCommand } from 'src/alarms/application/commands/create-alarm.command';
import { ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@Controller({
  path: 'alarms',
  version: '1',
})
export class AlarmsController {
  constructor(private readonly alarmsService: AlarmsService) {}

  @ApiOperation({ summary: 'Create an alarm' })
  @ApiResponse({ status: 201, description: 'Alarm created successfully' })
  @ApiBody({ type: CreateAlarmDto })
  @Post()
  create(@Body() createAlarmDto: CreateAlarmDto) {
    return this.alarmsService.create(
      new CreateAlarmCommand(createAlarmDto.name, createAlarmDto.severity),
    );
  }

  @ApiOperation({ summary: 'Get all alarms' })
  @ApiResponse({ status: 200, description: 'Alarms fetched successfully' })
  @Get()
  findAll() {
    return this.alarmsService.findAll();
  }
}
