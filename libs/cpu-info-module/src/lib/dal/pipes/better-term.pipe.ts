import { Pipe, PipeTransform } from '@angular/core';
import { HardwareType, SensorType } from '../models';

@Pipe({
  name: 'betterTerm'
})
export class BetterTermPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    switch (value) {
      case 'Generic Memory':
        return 'Memory';
      case SensorType.CLOCK:
        return 'Clock Speed';
      case SensorType.FAN:
        return 'Fan Speed';
      case HardwareType.HDD:
        return 'Drive';
      default:
        return value;
    }
  }
}
