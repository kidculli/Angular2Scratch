import { Component } from '@angular/core';
import { Hero } from 'app/hero';
import { HeroDetailComponent } from './hero-detail.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.styles.css'],
  directives:[HeroDetailComponent]
})
export class AppComponent {
  public heroes  = HEROES;
  title:string = 'Tour of Heroes';
  selectedHero: Hero; 
  onSelect(hero: Hero) {
    this.selectedHero = hero;
    console.log('Selected ' + this.selectedHero.name);
  }
}


var HEROES: Hero[] = [
  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
];