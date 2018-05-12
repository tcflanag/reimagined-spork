import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { PowerCardDetailComponent } from './power-card-detail/power-card-detail.component';
import { PowerService } from './power.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { AngularDraggableModule } from 'angular2-draggable';
import {AngularFittextModule} from 'angular-fittext';
import {ContextMenuModule } from'ngx-contextmenu';


@NgModule({
  declarations: [
    AppComponent,
    PowerCardDetailComponent,
    MessagesComponent,
    DashboardComponent,
    CardsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularDraggableModule,
    AngularFittextModule,
  ],
  providers: [
    PowerService,
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
