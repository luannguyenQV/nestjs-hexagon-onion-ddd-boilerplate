import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateAlarmCommand } from './create-alarm.command';
import { AlarmRepository } from '../ports/alarm.repository';
import { Alarm } from 'src/alarms/domain/alarm';
import { AlarmFactory } from 'src/alarms/domain/factories/alarm.factory';

@CommandHandler(CreateAlarmCommand)
export class CreateAlarmCommandHandler
  implements ICommandHandler<CreateAlarmCommand, Alarm>
{
  constructor(private readonly alarmRepository: AlarmRepository) {}

  async execute(command: CreateAlarmCommand): Promise<Alarm> {
    const alarm = AlarmFactory.create(command.name, command.severity);
    return await this.alarmRepository.save(alarm);
  }
}
