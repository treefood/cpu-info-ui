import { Pipe, PipeTransform } from '@angular/core';
import { SensorType } from '../models';

@Pipe({
  name: 'unit'
})
export class UnitPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    switch (value) {
      case SensorType.CLOCK:
        return 'MHz';
      case SensorType.CONTROL:
        return '%';
      case SensorType.FAN:
        return 'RPM';
      case SensorType.FLOW:
        return 'L/h';
      case SensorType.LEVEL:
        return '%';
      case SensorType.LOAD:
        return '%';
      case SensorType.TEMPERATURE:
        return '\xB0C';
      case SensorType.VOLTAGE:
        return 'V';
    }
    return 'N/A';
  }
}
