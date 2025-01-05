import { ApiProperty } from '@nestjs/swagger';
import { AlarmSeverity } from './value-objects/alarm-severity';
import {
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
  IsEnum,
} from 'class-validator';

export class Alarm {
  constructor(id: string, name: string, severity: AlarmSeverity) {
    this.id = id;
    this.name = name;
    this.severity = severity;
  }

  @ApiProperty({
    description: 'The unique identifier of the alarm',
    example: '123',
    type: String,
  })
  @IsNotEmpty()
  id: string;

  @ApiProperty({
    description: 'The name of the alarm',
    example: 'Alarm 1',
    type: String,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(255)
  name: string;

  @ApiProperty({
    description: 'The severity of the alarm',
    example: 'critical',
    type: AlarmSeverity,
  })
  @IsNotEmpty()
  @IsEnum(AlarmSeverity)
  severity: AlarmSeverity;
}
