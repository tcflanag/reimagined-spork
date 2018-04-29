import { Component, OnInit } from '@angular/core';
import { Power, Weapon } from '../Power';
import { HeroDetailComponent }  from '../hero-detail/hero-detail.component';
import {PowerService} from "../power.service"

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  powers: Power[];
  z_index: number[];

  constructor(private heroService: PowerService) { }

  ngOnInit() {
    this.getHeroes();
    this.z_index = new Array(this.powers.length);
    this.powers.forEach(element => {
      this.z_index[element.id] = element.id;
    });
    
  }
  inBounds = true;
  edge = {
    top: true,
    bottom: true,
    left: true,
    right: true
  };
  checkEdge(event) {
    this.edge = event;
    console.log('edge:', event);
  }
  onDragEnd(event: Event, id: number): void{
    
    
    for ( let i in this.z_index) {
      if (parseInt(i) != id){
        if (this.z_index[i]> this.z_index[id]){
          this.z_index[i]--;
        }
      }
    }
    this.z_index[id] = this.z_index.length;
    console.log(this.z_index);
  
  }

  getHeroes(): void {
    this.heroService.getPowers()
    .subscribe(powers => this.powers = powers);
  }
}

