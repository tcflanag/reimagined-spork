import { Component, OnInit } from '@angular/core';
import {Power, Weapon} from '../Power'
import {PowerService} from "../power.service"



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
  
})
export class HeroesComponent implements OnInit {

  
  powers: Power[];
  constructor(private heroService: PowerService) {}
  
  getHeroes(): void {
    this.heroService.getPowers()
        .subscribe(powers => this.powers = powers);
  }

  ngOnInit() {
    this.getHeroes();
  }

}

