import { IPlant } from '@home/plants/data-access';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home-plant-list',
  templateUrl: './plant-list.component.html',
  styleUrls: ['./plant-list.component.scss']
})
export class PlantListComponent implements OnInit {
  plant: IPlant[] = [
    {
      name: 'Peace Lily',
      datePlanted: 'June 30, 2020'
    },
    {
      name: 'Lucky Bamboo',
      datePlanted: 'May 1, 2018'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
