import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'; 
import { MatDialogModule, MatDialog, MatFormFieldModule,MatInputModule,MatSlideToggle, MatSlideToggleModule,MatAutocompleteModule,MatSelectModule,
} from '@angular/material';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularDraggableModule } from 'angular2-draggable';

import { AppComponent } from './app.component';
import { PowerCardDetailComponent } from './power-card-detail/power-card-detail.component';
import { PowerService } from './power.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import {ContextMenuModule } from'ngx-contextmenu';
import { StatusEditorComponent, StatusEditorComponentDialog } from './status-editor/status-editor.component';



@NgModule({
  declarations: [
    AppComponent,
    PowerCardDetailComponent,
    MessagesComponent,
    DashboardComponent,
    CardsComponent,
    StatusEditorComponent,
    StatusEditorComponentDialog,
    
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularDraggableModule,
    ContextMenuModule.forRoot(),
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    
    
  ],
  providers: [
    PowerService,
    MessageService,
    MatDialog,
  ],
  bootstrap: [AppComponent],
  entryComponents: [StatusEditorComponent, StatusEditorComponentDialog],
})
export class AppModule { }
