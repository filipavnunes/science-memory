import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restart-dialog',
  templateUrl: './restart-dialog.component.html',
  styleUrls: ['./restart-dialog.component.scss']
})
export class RestartDialogComponent implements OnInit {

  constructor() { }

  speech = new SpeechSynthesisUtterance();


  ngOnInit(): void {
    this.speech.text = "Parabéns! Completaste o Jogo!";
    window.speechSynthesis.speak(this.speech);
  }

}
