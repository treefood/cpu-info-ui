import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListNavigationModel } from '@treefood/common';
import { Subscription } from 'rxjs';
import { Hardware, InfoService, Sensor } from '../../dal';
import { BetterTermPipe } from '../../dal/pipes/better-term.pipe';

@Component({
  selector: 'ci-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  sensors: Sensor[] = [];
  selectedSensors: Sensor[] = [];
  hardware: Hardware[] = [];
  list: ListNavigationModel[] = [];
  localSubscriptions$: Subscription = new Subscription();

  constructor(
    private infoService: InfoService,
    private router: Router,
    private route: ActivatedRoute,
    private betterTerm: BetterTermPipe
  ) {}

  ngOnInit(): void {
    this.infoService.getHardware().subscribe(items => {
      this.hardware = items;
      this.assembleList();
    });
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

  assembleList() {
    this.hardware?.map(item => {
      this.list.push({
        name: this.betterTerm.transform(item.Name),
        path: `device/${item.Identifier.replace('/', '').replace(/\//gi, '-')}`
      });
    });
  }

  navigateToDevice(device: string) {
    this.router.navigate([`${device}`], { relativeTo: this.route });
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
