import { Injectable } from '@nestjs/common';
import { CreateAlarmCommand } from './commands/create-alarm.command';
import { AlarmRepository } from './ports/alarm.repository';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { FindAllAlarmsQuery } from './queries/find-all.query';
import { Alarm } from '../domain/alarm';

@Injectable()
export class AlarmsService {
  constructor(
    private readonly alarmRepository: AlarmRepository,
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  create(createAlarmCommand: CreateAlarmCommand): Promise<Alarm> {
    return this.commandBus.execute(createAlarmCommand);
  }

  findAll(): Promise<Alarm[]> {
    return this.queryBus.execute(new FindAllAlarmsQuery());
  }
}
