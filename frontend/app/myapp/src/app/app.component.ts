import { Component } from '@angular/core';
import { Facilitiy } from './facility';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css'
  ]
})

export class AppComponent {
  title = 'myapp';
  value: Date;
  facilities: Facilitiy[];
  selectedFacilities: Facilitiy[];

  constructor() {
    this.facilities = [
      {name: "room1"},
      {name: "room2"},
      {name: "room3"},
      {name: "room4"},
      {name: "room5"},
      {name: "room6"},
      {name: "room7"},
      {name: "room8"},
      {name: "room9"},
      {name: "room10"},
      {name: "room11"},
      {name: "room12"},
    ];
  }
}
