import { Component } from '@angular/core';

import { menJeans } from 'src/data/Men/men_jeans';
import { gounsPage1 } from 'src/data/Gouns/gouns';
import { lenghacholiPage1 } from 'src/data/Women/LenghaCholi';
import { kurtaPage1 } from 'src/data/Kurta/kurta';
import { mensShoesPage1 } from 'src/data/shoes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  menJeans: any;
  womenGouns: any;
  lenghaChoil: any;
  mensKurta: any;
  mensShoes: any;

  ngOnInit() {
    this.menJeans = menJeans.slice(0, 4);
    this.womenGouns = gounsPage1.slice(0, 4);
    this.lenghaChoil = lenghacholiPage1.slice(0, 4);
    this.mensKurta = kurtaPage1.slice(0, 4);
    this.mensShoes = mensShoesPage1.slice(0, 4);
  }
}
