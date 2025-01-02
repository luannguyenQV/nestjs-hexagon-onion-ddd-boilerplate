import { AlarmRepository } from 'src/alarms/application/ports/alarm.repository';
import { AlarmEntity } from './entities/alarm.entity';
import { OrmAlarmRepository } from './repositories/alarm.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([AlarmEntity])],
  providers: [{ provide: AlarmRepository, useClass: OrmAlarmRepository }],
  exports: [AlarmRepository],
})
export class OrmPersistenceModule {}
