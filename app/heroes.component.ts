import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import {Router} from '@angular/router-deprecated';

@Component({
  selector: 'my-heroes',
  templateUrl: 'app/hero.component.html',
  styleUrls: ['app/hero.component.styles.css'],
  directives:[HeroDetailComponent],
})
export class HeroesComponent implements OnInit{
  selectedHero: Hero;
  heroes:Hero[];
  addingHero = false; 
  error: any; 
  
  constructor(private heroService:HeroService,
  private router:Router) {};

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    //this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
    //console.log('Selected ' + this.selectedHero.name);
  }
  gotoDetail(){
    console.log("going to detail"); 
    this.router.navigate(['HeroDetail',{
      id:this.selectedHero.id
    }])
  }
  addHero() {
    this.addingHero = true;
    this.selectedHero = null;
  }

  close(savedHero: Hero) {
    this.addingHero = false;
    if (savedHero) { this.getHeroes(); }
  }
  delete(hero: Hero, event: any) {
    event.stopPropagation();
    this.heroService
        .delete(hero)
        .then(res => {
          this.heroes = this.heroes.filter(h => h !== hero);
          if (this.selectedHero === hero) { this.selectedHero = null; }
        })
        .catch(error => this.error = error); // TODO: Display error message
  }
}
