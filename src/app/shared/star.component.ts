import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnChanges {
  faStar = faStar;
  cropwidth = 75;
  @Input() raitng: number = 0;
  @Output() raitngClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.cropwidth = (this.raitng * 75) / 5;
  }

  onClick(): void {
    this.raitngClicked.emit(`the raitng ${this.raitng} was clicked!`);
    console.log(`the raitng ${this.raitng} was clicked!`);
  }
}
