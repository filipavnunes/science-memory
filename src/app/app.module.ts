import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { InitalMenuComponent } from './inital-menu/inital-menu.component';
import { GameComponent } from './gameFolder/game/game.component';
import { GameCardComponent } from './gameFolder/game-card/game-card.component';
import { RestartDialogComponent } from './gameFolder/restart-dialog/restart-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { InitialScreenComponent } from './initial-screen/initial-screen.component';
import { PromptUpdateService } from './services/prompt-update.service';

@NgModule({
  declarations: [
    AppComponent,
    InitalMenuComponent,
    GameComponent,
    GameCardComponent,
    RestartDialogComponent,
    InitialScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [PromptUpdateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
