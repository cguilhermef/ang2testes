import { Component, OnInit } from '@angular/core';

import { Hero } from 'app/hero';
import { HeroService } from 'app/hero.service';

@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => heroes = this.heroes = heroes.slice(1, 5));
  }

}
