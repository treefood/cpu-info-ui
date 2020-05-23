import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, timer } from 'rxjs';
import { Hardware } from '../models';
import { Sensor } from '../models/sensor.model';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  info$: BehaviorSubject<Sensor[]>;
  hardwareInfo$: BehaviorSubject<Hardware[]>;
  sensors: Sensor[] = [];
  hardware: Hardware[];
  displaySensors: Sensor[] = [];
  currentDisplay: string;
  preferred: Sensor[] = [];

  constructor(private http: HttpClient) {
    if (!this.info$) {
      this.info$ = <BehaviorSubject<Sensor[]>>new BehaviorSubject(this.sensors);
    }
    if (!this.hardwareInfo$) {
      this.hardwareInfo$ = <BehaviorSubject<Hardware[]>>(
        new BehaviorSubject(this.hardware)
      );
    }
    this.getPreferred().subscribe(x => (this.preferred = x));

    this.http
      .get<Hardware[]>('http://zane-pc:8080/hardware')
      .subscribe(hardware => {
        this.hardware = hardware;
        this.hardwareInfo$.next(this.hardware);
      });
    timer(0, 2000).subscribe(x => {
      this.http
        .get<Sensor[]>('http://zane-pc:8080/sensors')
        .subscribe(sensors => {
          this.sensors = sensors;
          switch (this.currentDisplay) {
            case 'preferred':
              let newDisplaySensors = [];
              this.preferred.map(preferred => {
                newDisplaySensors.push(
                  this.sensors.find(x => x.Identifier === preferred.Identifier)
                );
              });
              this.displaySensors = newDisplaySensors;
              break;
            default:
              this.displaySensors = sensors;
              break;
          }
          this.info$.next(this.displaySensors);
        });
    });
  }

  generateInfo() {
    this.info$.next(this.sensors);
    setInterval(() => {
      this.sensors.forEach(sensor => {
        sensor.Value = Math.floor(Math.random() * Math.floor(sensor.Max));
      });
    }, 20000);
  }

  private handleError(error: HttpErrorResponse) {
    if (error instanceof ErrorEvent) {
      console.log('an Application error occured:', error.statusText);
    } else {
      console.log('Server has returned an error code:', error.status);
      console.log('error body:', error.error);
    }
  }

  getSensors() {
    return this.info$.asObservable();
  }

  setDisplay(display: string) {
    this.currentDisplay = display;
    switch (this.currentDisplay) {
      case 'preferred':
        let newDisplaySensors = [];
        this.preferred.map(preferred => {
          newDisplaySensors.push(
            this.sensors.find(x => x.Identifier === preferred.Identifier)
          );
        });
        this.displaySensors = newDisplaySensors;
        break;
      default:
        this.displaySensors = this.sensors;
        break;
    }
    this.info$.next(this.displaySensors);
  }

  getSensorsOnce() {
    return this.http.get<Sensor[]>('http://zane-pc:8080/sensors');
  }

  getHardware() {
    return this.hardwareInfo$.asObservable();
  }

  getPreferred(): Observable<Sensor[]> {
    return this.http.get<Sensor[]>('http://zane-pc:8080/preferred');
  }
}
