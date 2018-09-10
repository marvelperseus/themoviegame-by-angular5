import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActorListCardComponent } from './components/actor-list-card/actor-list-card.component';
import { PlayreScoreListComponent } from './components/playre-score-list/playre-score-list.component';

const routes: Routes=[
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'leaderboard', component: PlayreScoreListComponent },
  { path: 'actorlist', component: ActorListCardComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
