import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { PowerCardDetailComponent }  from './power-card-detail/power-card-detail.component';
import { CardsComponent } from './cards/cards.component';
import { StatusEditorComponent } from './status-editor/status-editor.component';

const routes: Routes = [

  { path: 'cards', component: CardsComponent},
  { path: 'status', component: StatusEditorComponent },
  { path: '', component: CardsComponent, pathMatch: 'full' },
    
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
