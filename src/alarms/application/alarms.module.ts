import { Module, DynamicModule, Type } from '@nestjs/common';
import { AlarmsService } from '../application/alarms.service';
import { AlarmsController } from '../presenters/http/alarms.controller';
import { AlarmFactory } from '../domain/factories/alarm.factory';
import { CreateAlarmCommand } from './commands/create-alarm.command';

@Module({
  controllers: [AlarmsController],
  providers: [AlarmsService, AlarmFactory, CreateAlarmCommand],
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
