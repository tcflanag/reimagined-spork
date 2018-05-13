import { Component, OnInit, Input } from '@angular/core';
import { Power,Weapon } from '../Power';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PowerService }  from '../power.service';

@Component({
  selector: 'app-power-card-detail',
  //templateUrl: './power-card-detail.component.html',
  //styleUrls: ['./power-card-detail.component.css']
  templateUrl: './new-power-card-detail.component.html',
  styleUrls: ['./new-power-card-detail.component.css']
})
export class PowerCardDetailComponent implements OnInit {

  @Input() apower: Power;
  @Input() id = -1;
  

  constructor(
    private route: ActivatedRoute,
    private powerService: PowerService,
    private location: Location
  ) {}

  ngOnInit(): void {
    

  }

  goBack(): void {
    this.location.back();
  }

}
