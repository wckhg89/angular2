import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-app',
  //template :``
  templateUrl: 'view/app_component/app.component.html',
  //styles : ``
  styleUrls: ['css/app.component.css'],
  directives: [HeroDetailComponent],
  providers: [HeroService]
})

export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService) { }
  getHeroes() {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    //
  }
  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero) { this.selectedHero = hero; }
}
