import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  carsData: Car[] = [
    {
      name: 'BMW',
      searchName: 'bmw',
      speed: 280,
      model: 'M5',
      colors: {
        car: 'blue',
        salon: 'black',
        wheels: 'red'
      },
      options: ['ABS', 'Auto', 'Parking']
    },
    {
      name: 'Audi',
      searchName: 'audi',
      speed: 235,
      model: 'RS8',
      colors: {
        car: 'white',
        salon: 'black',
        wheels: 'silver'
      },
      options: ['ABS', 'Auto', 'Parking']
    },
    {
      name: 'Mercedes',
      searchName: 'mer',
      speed: 275,
      model: 'S',
      colors: {
        car: 'red',
        salon: 'white',
        wheels: 'golden'
      },
      options: ['ABS', 'Auto', 'Parking']
    }
  ];

  currentCar: Car = this.carsData[0];

  updateForm = false;

  // On component init (earlier)
  constructor() {
  }

  // On component init
  ngOnInit(): void {
  }

  carSelect(carName: string): void {
    this.currentCar = (this.carsData.filter(car => car.searchName === carName).pop() as Car);
  }

  addOpt(newOption: string): boolean {
    this.currentCar.options.unshift(newOption);
    return false;
  }

  removeOpt(removeOption: string): boolean {
    this.currentCar.options = this.currentCar.options.filter(option => option !== removeOption);
    return false;
  }

  switchUpdateForm(): void {
    this.updateForm = !this.updateForm;
  }

}

interface Colors {
  car: string;
  salon: string;
  wheels: string;
}

interface Car {
  name: string;
  searchName: string;
  speed: number;
  model: string;
  colors: Colors;
  options: string[];
}
