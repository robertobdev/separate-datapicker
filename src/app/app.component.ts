import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'separate-datepicker';

  months: Array<{ value: number, name: string }> = [
    { value: 1, name: 'Jan' },
    { value: 2, name: 'Feb' },
    { value: 3, name: 'Mar' },
    { value: 4, name: 'Abr' },
    { value: 5, name: 'Mai' },
    { value: 6, name: 'Jun' },
    { value: 7, name: 'Jul' },
    { value: 8, name: 'Ago' },
    { value: 9, name: 'Set' },
    { value: 10, name: 'Out' },
    { value: 11, name: 'Nov' },
    { value: 12, name: 'Dec' }
  ];
  years: Array<number> = [];

  days: Array<number> = [];

  answer(value) {
    console.log(value);
  }
  constructor() {
    let year: any = new Date();
    year = year.getFullYear();
    console.log(year);
    for (let index = year; index > year - 90; index--) {
      this.years.push(index);
    }
    for (let index = 1; index < 32; index++) {
      this.days.push(index);
    }
  }
}
