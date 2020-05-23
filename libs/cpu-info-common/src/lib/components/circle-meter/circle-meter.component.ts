import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ci-circle-meter',
  templateUrl: './circle-meter.component.html',
  styleUrls: ['./circle-meter.component.scss']
})
export class CircleMeterComponent implements OnInit {
  @Input() value: number;
  @Input() max: number;
  fillValue: number = 0;
  displayPercentage = 0;

  constructor() {}

  ngOnInit(): void {
    this.determineFillValue();
    this.determineDisplayPercentage();
  }

  determineFillValue() {
    this.fillValue = (this.value / this.max) * 377;
  }

  determineDisplayPercentage() {
    this.displayPercentage = Math.ceil((this.value / this.max) * 100);
  }
}
