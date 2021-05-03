import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restart-dialog',
  templateUrl: './restart-dialog.component.html',
  styleUrls: ['./restart-dialog.component.scss']
})
export class RestartDialogComponent implements OnInit {

  constructor(private router: Router, private dialogRef: MatDialogRef<RestartDialogComponent>) { }

  speech = new SpeechSynthesisUtterance();


  ngOnInit(): void {
    this.speech.lang = 'pt-PT';
    this.speech.text = "Parabéns! Completaste o Jogo!";
    window.speechSynthesis.speak(this.speech);
  }

  redirectHome(){
    this.dialogRef.close();
    this.router.navigateByUrl('/', { state: { displayInitialScreen: false } });
  }

}
