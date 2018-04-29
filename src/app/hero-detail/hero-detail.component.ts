import { Component, OnInit, Input } from '@angular/core';
import { Power,Weapon } from '../Power';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PowerService }  from '../power.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  @Input() apower: Power;
  @Input() id = -1;
  

  constructor(
    private route: ActivatedRoute,
    private powerService: PowerService,
    private location: Location
  ) {}

  ngOnInit(): void {
    
    this.getPower();


  }
  
  getPower(): void {
    if (this.id == -1) {
      const id = +this.route.snapshot.paramMap.get('id');
      this.powerService.getPower(id).subscribe(apower => this.apower = apower);
    }
    else {
      const id = this.id;
      this.powerService.getPower(id).subscribe(apower => this.apower = apower);
    }

  }
  goBack(): void {
    this.location.back();
  }

}
