import { Module, DynamicModule, Type } from '@nestjs/common';
import { AlarmsService } from '../application/alarms.service';
import { AlarmsController } from '../presenters/http/alarms.controller';
import { AlarmFactory } from '../domain/factories/alarm.factory';
import { CreateAlarmCommand } from './commands/create-alarm.command';
import { CreateAlarmCommandHandler } from './commands/create-alarm.command-handler';
import { FindAllAlarmsQueryHandler } from './queries/find-all.query-handler';
import { FindAllAlarmsQuery } from './queries/find-all.query';

@Module({
  controllers: [AlarmsController],
  providers: [
    AlarmsService,
    AlarmFactory,
    CreateAlarmCommand,
    CreateAlarmCommandHandler,
    FindAllAlarmsQuery,
    FindAllAlarmsQueryHandler,
  ],
})
export class AlarmsModule {
  static withInfrastructure(infrastructure: DynamicModule | Type) {
    return {
      module: AlarmsModule,
      imports: [infrastructure],
      providers: [],
      exports: [],
    };
  }
}
