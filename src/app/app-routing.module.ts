import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {HeroesComponent} from'./heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { CardsComponent } from './cards/cards.component';

const routes: Routes = [
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent},
  { path: 'cards', component: CardsComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: '', component: CardsComponent, pathMatch: 'full' },
    
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
