export enum SensorType {
  VOLTAGE = 'Voltage',
  CLOCK = 'Clock',
  TEMPERATURE = 'Temperature',
  LOAD = 'Load',
  FAN = 'Fan',
  FLOW = 'Flow',
  CONTROL = 'Control',
  LEVEL = 'Level'
}

export interface Sensor {
  Name: string;
  Identifier: string;
  SensorType: SensorType;
  Parent: string;
  ParentName?: string;
  Value: number;
  Min: number;
  Max: number;
  Index: number;
  InstanceId?: string;
  ProcessId?: string;
}
