import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InicialMenuHelpComponent } from '../inicial-menu-help/inicial-menu-help.component';
import { InitialMenuVideoComponent } from '../initial-menu-video/initial-menu-video.component';

@Component({
  selector: 'app-inital-menu',
  templateUrl: './inital-menu.component.html',
  styleUrls: ['./inital-menu.component.scss']
})
export class InitalMenuComponent implements OnInit {

  speech = new SpeechSynthesisUtterance();
  displayInitialScreen: boolean = true;

  constructor(private router: Router, private dialog: MatDialog) {
    const { state } = this.router.getCurrentNavigation()?.extras || {};
    if (state) {
      this.displayInitialScreen = state.displayInitialScreen;
    }
  }

  ngOnInit(): void {
  }


  openBoardGame(gameType: string) {
    switch (gameType) {
      case 'dino':
        this.router.navigate(['game', 'dinossaur']);
        break;
      case 'space':
        this.router.navigate(['game', 'space']);
        break;
      case 'lego':
        this.router.navigate(['game', 'lego']);
        break;
      case 'aviao':
        this.router.navigate(['game', 'aviao']);
        break;
    }
  }

  speak(type: string) {
    this.speech.text = type;
    this.speech.lang = 'pt-BR';
    console.log(this.speech)
    window.speechSynthesis.speak(this.speech);
  }

  openVideoDialog(videoSection: string) {
    const dialogRef = this.dialog.open(InitialMenuVideoComponent, {
      data: videoSection
    });
  }

  openInfoDialog() {
    const dialogRef = this.dialog.open(InicialMenuHelpComponent);
  }
}
