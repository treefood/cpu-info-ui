import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { ListNavigationModel } from '../../dal';

@Component({
  selector: 'treefood-list-navigation',
  templateUrl: './list-navigation.component.html',
  styleUrls: ['./list-navigation.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListNavigationComponent implements OnInit {
  @Input() items: ListNavigationModel[];
  @Output() navigation = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  navigate(path: ListNavigationModel) {
    console.log(path.path);
    this.navigation.emit(path.path);
  }
}
