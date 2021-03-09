import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'ci-semi-ellipse-meter',
  templateUrl: './semi-ellipse-meter.component.html',
  styleUrls: ['./semi-ellipse-meter.component.scss']
})
export class SemiEllipseMeterComponent implements OnInit, OnChanges {
  @Input() max: number;
  @Input() value: number;
  @Input() name: string;
  @Input() unit: string;
  fillValue: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.determineFillValue();
    this.max = Math.ceil(this.max);
    this.value = parseFloat(this.value.toFixed(0));
  }

  ngOnChanges(changes: SimpleChanges) {
    this.max = Math.ceil(this.max);
    this.determineFillValue();
    this.value = parseFloat(this.value.toFixed(0));
  }

  determineFillValue() {
    this.fillValue = (this.value / this.max) * 157 + 157;
  }
}
