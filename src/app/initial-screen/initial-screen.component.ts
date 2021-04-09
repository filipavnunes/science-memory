import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'initial-screen',
  templateUrl: './initial-screen.component.html',
  styleUrls: ['./initial-screen.component.scss']
})
export class InitialScreenComponent implements OnInit {

  splashTransition!: string;
  opacityChange: number = 1;
  showSplash = true;

  ngOnInit(): void {
    setTimeout(() => {
      var transitionStyle = "opacity 0.5s";

      this.splashTransition = transitionStyle;
      this.opacityChange = 0;

      setTimeout(() => {
        this.showSplash = !this.showSplash;
      }, 500);
    }, 3000);
  }
}
