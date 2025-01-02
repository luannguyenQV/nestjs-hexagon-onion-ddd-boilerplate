import { Injectable } from '@nestjs/common';
import { Alarm } from 'src/alarms/domain/alarm';
import { Repository } from 'typeorm';
import { AlarmEntity } from '../entities/alarm.entity';
import { AlarmRepository } from '../../../../application/ports/alarm.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { AlarmMapper } from '../mappers/alarm.mapper';

@Injectable()
export class OrmAlarmRepository implements AlarmRepository {
  constructor(
    @InjectRepository(AlarmEntity)
    private readonly alarmRepository: Repository<AlarmEntity>,
  ) {}

  async save(alarm: Alarm): Promise<Alarm> {
    const alarmEntity = AlarmMapper.toPersistence(alarm);
    await this.alarmRepository.save(alarmEntity);

    return AlarmMapper.toDomain(alarmEntity);
  }

  async findAll(): Promise<Alarm[]> {
    const alarms = await this.alarmRepository.find();

    return alarms.map((alarm) => AlarmMapper.toDomain(alarm));
  }
}
