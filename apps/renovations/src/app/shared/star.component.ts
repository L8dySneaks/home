import { Component, OnChanges } from '@angular/core';

@Component({
  selector: 'home-shared-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnChanges {
  rating = 4;
  cropWidth = 75;

  ngOnChanges(): void {
      this.cropWidth = this.rating * 75/5;
  }

  onClick(): void {
    console.log(`The rating ${this.rating} was clicked!`);
  }
}
