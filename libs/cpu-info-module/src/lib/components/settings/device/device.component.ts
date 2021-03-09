import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Hardware, InfoService, Sensor } from '../../../dal';

@Component({
  selector: 'treefood-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DeviceComponent implements OnInit, OnDestroy {
  localSubscriptions: Subscription = new Subscription();
  hardware: Hardware;
  sensors: Sensor[];

  constructor(
    private service: InfoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.localSubscriptions.add(
      combineLatest([
        this.service.getSensorsOnce(),
        this.route.paramMap,
        this.service.getHardware()
      ])
        .pipe(
          map(results => ({
            sensors: results[0],
            params: results[1],
            hardware: results[2]
          }))
        )
        .subscribe(results => {
          let device_id = results.params.get('device_id');
          device_id = '/'.concat(device_id.replace(/-/gi, '/'));
          this.sensors = results.sensors.filter(
            sensor => sensor.Parent === device_id
          );
          this.hardware = results.hardware.find(
            item => item.Identifier === device_id
          );
          this.sortSensors();
        })
    );
  }

  sortSensors() {
    this.sensors = this.sensors.sort((a, b) => {
      if (a.Name < b.Name) {
        return -1;
      } else if (a.Name > b.Name) {
        return 1;
      } else {
        return 0;
      }
    });
    this.sensors = this.sensors.sort((a, b) => {
      if (a.SensorType < b.SensorType) {
        return -1;
      } else if (a.SensorType > b.SensorType) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  back() {
    this.router.navigate(['../..'], { relativeTo: this.route });
  }

  select(sensor: Sensor) {}

  ngOnDestroy(): void {
    this.localSubscriptions.unsubscribe();
  }
}
