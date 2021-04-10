import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inital-menu',
  templateUrl: './inital-menu.component.html',
  styleUrls: ['./inital-menu.component.scss']
})
export class InitalMenuComponent implements OnInit {

  speech = new SpeechSynthesisUtterance();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  openBoardGame(gameType: string){
    switch(gameType){
      case 'dino':
        this.router.navigate(['game', 'dinossaur']);
        break;
      case 'space':
        this.router.navigate(['game', 'space']);
        break;
       case 'lego':
        this.router.navigate(['game', 'lego']);
        break;
    }
  }

  speak(type: string){
    this.speech.text = type;
    window.speechSynthesis.speak(this.speech);
  }
}
