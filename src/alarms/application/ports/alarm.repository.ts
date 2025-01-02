import { Alarm } from '../../domain/alarm';

export abstract class AlarmRepository {
  abstract save(alarm: Alarm): Promise<Alarm>;
  abstract findAll(): Promise<Alarm[]>;
}
