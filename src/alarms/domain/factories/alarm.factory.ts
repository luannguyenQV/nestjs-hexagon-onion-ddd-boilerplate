import { Injectable } from '@nestjs/common';
import { AlarmSeverity } from '../value-objects/alarm-severity';
import { Alarm } from '../alarm';
import { randomUUID } from 'crypto';

@Injectable()
export class AlarmFactory {
  static create(name: string, severity: string): Alarm {
    const id = randomUUID();

    const severityObj = new AlarmSeverity(severity as AlarmSeverity['value']);

    return new Alarm(id, name, severityObj);
  }
}
