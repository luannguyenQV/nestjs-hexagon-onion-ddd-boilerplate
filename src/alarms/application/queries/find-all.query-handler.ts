import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { AlarmRepository } from '../ports/alarm.repository';
import { Alarm } from 'src/alarms/domain/alarm';
import { FindAllAlarmsQuery } from './find-all.query';
@QueryHandler(FindAllAlarmsQuery)
export class FindAllAlarmsQueryHandler
  implements IQueryHandler<FindAllAlarmsQuery, Alarm[]>
{
  constructor(private readonly alarmRepository: AlarmRepository) {}

  async execute(): Promise<Alarm[]> {
    // TODO: Implement pagination, sorting, and searching
    return this.alarmRepository.findAll();
  }
}
