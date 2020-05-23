export interface Hardware {
  Name: string;
  Identifier: string;
  HardwareType: string;
  Parent: string;
}

export enum HardwareType {
  MAINBOARD = 'Mainboard',
  SUPERIO = 'SuperIO',
  CPU = 'CPU',
  GPUNVIDIA = 'GpuNvidia',
  GPUATI = 'GpuATI',
  TBALANCER = 'TBalancer',
  HEATMASTER = 'Heatmaster',
  HDD = 'HDD'
}
