import { Component, OnInit } from '@angular/core';
import { Power, Weapon,Character } from '../Power';
import { PowerCardDetailComponent }  from '../power-card-detail/power-card-detail.component';
import {PowerService} from "../power.service";
import {IPosition} from "angular2-draggable";
import { ContextMenuService, ContextMenuComponent } from "ngx-contextmenu";
import { element } from 'protractor';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  character: Character;
  z_index: number[];
  positions : IPosition[] ;
  overlap_check : number[][];
  constructor(private heroService: PowerService) { }
  readonly x_offset: number = 330;
  readonly y_offset: number = 30;
  ngOnInit() {
    this.getHeroes();
    
    console.log(this.character);

    this.z_index = new Array(this.character.powers.length);
    this.positions = new Array(this.character.powers.length);
    this.overlap_check = new Array();
    
    console.log(this.character);
    // Init the temp storage array
    // TODO: do this better
    for(var i: number = 0; i < 100; i++) {
      this.overlap_check[i] = [];
      for(var j: number = 0; j< 100; j++) {
          this.overlap_check[i][j] = 0;
      }
    }

    // Calculate initial positions
    this.character.powers.forEach(element => {
      let p : IPosition = {x:this.x_offset*Math.floor(element.id/12), y:this.y_offset*(element.id%12)};
      
      this.positions[element.id] = p;
      this.overlap_check[p.x/this.x_offset][p.y/this.y_offset]++;
      this.z_index[element.id] = p.y;
    });
    console.log(this.positions)

  }

  onMoveEnd(event, id: number): void{
    
    // Preform overlap checking
    // Snap cards to next unused spot
    
    this.overlap_check[this.positions[id].x/this.x_offset][this.positions[id].y/this.y_offset]--;

    let p : IPosition = {x:Math.round(event.x/this.x_offset)*this.x_offset,y:Math.round(event.y/this.y_offset)*this.y_offset};
    
    while (this.overlap_check[p.x/this.x_offset][p.y/this.y_offset] > 0){
      p.y += this.y_offset;
    };
    
    this.overlap_check[p.x/this.x_offset][p.y/this.y_offset] = 1;
    console.log(this.positions[id],event,p)
    this.positions[id] = p;
    this.z_index[id] = p.y;

  
  }

  getHeroes(): void {
    this.heroService.getCharacter().subscribe(character => this.character = character);
  }
}

