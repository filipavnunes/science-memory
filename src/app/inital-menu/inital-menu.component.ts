import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { InitialMenuVideoComponent } from '../initial-menu-video/initial-menu-video.component';

@Component({
  selector: 'app-inital-menu',
  templateUrl: './inital-menu.component.html',
  styleUrls: ['./inital-menu.component.scss']
})
export class InitalMenuComponent implements OnInit {

  speech = new SpeechSynthesisUtterance();

  constructor(private router: Router, private dialog: MatDialog) { }

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
      case 'car':
        this.router.navigate(['game', 'car']);
        break;
    }
  }

  speak(type: string) {
    this.speech.text = type;
    this.speech.lang = 'pt';
    window.speechSynthesis.speak(this.speech);
  }

  openVideoDialog(videoSection: string) {
    const dialogRef = this.dialog.open(InitialMenuVideoComponent, {
      data: videoSection
    });
  }
}
