import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  name: string;
  speed: number;
  model: string;
  colors: Colors;
  options: string[];

  // On component init (earlier)
  constructor() {
    this.name = 'Audi';
    this.speed = 235;
    this.model = 'RS8';
    this.colors = {
      car: 'white',
      salon: 'black',
      wheels: 'silver'
    };
    this.options = ['ABS', 'Auto', 'Parking'];
  }

  // On component init
  ngOnInit(): void {
  }

}

interface Colors {
  car: string;
  salon: string;
  wheels: string;
}
