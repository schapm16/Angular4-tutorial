import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})



export class HeroesComponent implements OnInit  { 
  constructor (
    private heroService: HeroService,
    private router: Router
  ){}

  heroes: Hero[];
  selectedHero: Hero; 

  getHeroes(): void {
    this.heroService.getHeroes().then(data => this.heroes = data);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id])
  }

}
