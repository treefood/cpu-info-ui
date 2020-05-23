import { Component, OnInit } from '@angular/core';
import { InfoService, Sensor } from '../../dal';

@Component({
  selector: 'ci-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  sensors: Sensor[] = [];
  selectedSensors: Sensor[] = [];

  constructor(private infoService: InfoService) {}

  ngOnInit(): void {
    this.infoService.getSensorsOnce().subscribe(
      sensors => {
        this.sensors = sensors.sort((a, b) => {
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
      },
      err => {
        console.log(err);
      }
    );
  }

  checkHandler(event, sensor: Sensor) {
    event['checked'] ? this.add(sensor) : this.remove(sensor);
  }

  add(sensor: Sensor) {
    this.selectedSensors.push(sensor);
    console.log(this.selectedSensors);
  }

  remove(sensor: Sensor) {
    this.selectedSensors.splice(
      this.selectedSensors.findIndex(x => x === sensor)
    );
    console.log(this.selectedSensors);
  }
}
