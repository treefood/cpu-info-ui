import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ci-vertical-meter',
  templateUrl: './vertical-meter.component.html',
  styleUrls: ['./vertical-meter.component.scss']
})
export class VerticalMeterComponent implements OnInit {
  @Input() max: number;
  @Input() name: string;
  @Input() value: number;
  @Input() unit: string;

  constructor() {}

  ngOnInit(): void {}
}
