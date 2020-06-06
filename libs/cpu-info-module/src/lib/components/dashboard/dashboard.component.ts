import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hardware, InfoService, Sensor, SensorType } from '../../dal';

@Component({
  selector: 'ci-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  sensors: Sensor[];
  preference: Sensor[];
  hardware: Hardware[];
  view: string;

  get clocks(): Sensor[] {
    return this.sensors.filter(
      sensor => sensor.SensorType === SensorType.CLOCK
    );
  }

  get voltages(): Sensor[] {
    return this.sensors.filter(
      sensor => sensor.SensorType === SensorType.VOLTAGE
    );
  }

  get temperatures(): Sensor[] {
    return this.sensors.filter(
      sensor => sensor.SensorType === SensorType.TEMPERATURE
    );
  }

  get loads(): Sensor[] {
    return this.sensors.filter(sensor => sensor.SensorType === SensorType.LOAD);
  }

  get fans(): Sensor[] {
    return this.sensors.filter(sensor => sensor.SensorType === SensorType.FAN);
  }

  get flows(): Sensor[] {
    return this.sensors.filter(sensor => sensor.SensorType === SensorType.FLOW);
  }

  get controls(): Sensor[] {
    return this.sensors.filter(
      sensor => sensor.SensorType === SensorType.CONTROL
    );
  }

  get levels(): Sensor[] {
    return this.sensors.filter(
      sensor => sensor.SensorType === SensorType.LEVEL
    );
  }

  constructor(
    private service: InfoService,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.service.getHardware().subscribe(hardware => {
      this.hardware = hardware;
      this.service.getPreferred().subscribe(x => {
        this.preference = x;
      });
      this.service.getSensors().subscribe(sensors => {
        this.sensors = sensors.sort((a, b) => {
          if (a.Name < b.Name) {
            return -1;
          } else if (a.Name > b.Name) {
            return 1;
          } else {
            return 0;
          }
        });
        this.route.params.subscribe(x => {
          if (this.view !== x['view']) {
            this.view = x['view'];
            this.service.setDisplay(this.view);
          }
        });
        this.sensors.forEach(sensor => {
          sensor.ParentName = this.hardware.find(
            x => x.Identifier === sensor.Parent
          ).Name;
        });
      });
    });
  }
}
