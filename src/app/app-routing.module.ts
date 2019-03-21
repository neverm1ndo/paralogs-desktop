import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerlogComponent } from './playerlog/playerlog.component';
import { LobbyComponent } from './lobby/lobby.component';

const routes: Routes = [
  { path: '', component: LobbyComponent },
  { path: ':player', component: PlayerlogComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
