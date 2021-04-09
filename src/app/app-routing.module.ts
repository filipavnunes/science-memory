import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { InitalMenuComponent } from './inital-menu/inital-menu.component';

const routes: Routes = [
  { path: "game", component: GameComponent },
  { path: "", component: InitalMenuComponent },
  {path: "science-memory-menu", component: InitalMenuComponent}, //Adicionar component dino
  {path: "science-memory-menu", component: InitalMenuComponent},//Adicionar component space
  {path: "science-memory-menu", component: InitalMenuComponent}//Adicionar component lego
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
