import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RestartDialogComponent } from '../restart-dialog/restart-dialog.component';
import { CardData } from '../../shared/models/card-data.model';
import { Router } from '@angular/router';
import * as confetti from 'canvas-confetti';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  cardImages: string[] = [];
  cards: CardData[] = [];
  flippedCards: CardData[] = [];
  matchedCount = 0;

  constructor(private dialog: MatDialog, private router: Router, private renderer2: Renderer2,
    private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    if (this.router.url.includes('dinossaur')) {
      //MUDAR PARA OS IDS APROPRIADOS
      this.cardImages = [
        'hYKG311mff8',
        '-15ZMeUKtJM',
        'Fl0GNjfFdXg',
        'cYNF1EdbMJk',
        'sw32fhWhN68',
        '7_yzujmD8AE'
      ];
    }

    if (this.router.url.includes('space')) {
      //MUDAR PARA OS IDS APROPRIADOS
      this.cardImages = [
        'hpt0AJPZ0Aw',
        'U2uKrI4lci8',
        'e5eDHbmHprg',
        'Ed2AELHKYBw',
        '5_Z3YVosrCw',
        '8_C1mNcgWiQ'
      ];
    }

    if (this.router.url.includes('lego')) {
      //MUDAR PARA OS IDS APROPRIADOS
      this.cardImages = [
        'CXDw96Oy-Yw',
        'YrMjQFkXYIs',
        'vSUc4FmgkDg',
        'ArA3S3k0wTU',
        'lopW3VcAUU0',
        '-1v0JL_wINc'
      ];
    }

    if (this.router.url.includes('aviao')) {
      //MUDAR PARA OS IDS APROPRIADOS
      this.cardImages = [
        'C-LJdc61G2w',
        'c5F1hhK5t0Q',
        'CdlhHc3nEkk',
        '0r5Hn8IG5cQ',
        'u-1cYIua_aI',
        '3aLBjkdzT-U'
      ];
    }

    this.setupCards();
  }

  shuffleArray(anArray: any[]): any[] {
    return anArray.map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  }

  setupCards(): void {
    this.cards = [];
    this.cardImages.forEach((image) => {
      const cardData: CardData = {
        imageId: image,
        state: 'default'
      };

      this.cards.push({ ...cardData });
      this.cards.push({ ...cardData });
    });

    this.cards = this.shuffleArray(this.cards);
  }

  cardClicked(index: number): void {
    const cardInfo = this.cards[index];

    if (cardInfo.state === 'default' && this.flippedCards.length < 2) {
      cardInfo.state = 'flipped';
      this.flippedCards.push(cardInfo);

      if (this.flippedCards.length > 1) {
        this.checkForCardMatch();
      }

    } else if (cardInfo.state === 'flipped') {
      cardInfo.state = 'default';
      this.flippedCards.pop();
    }
  }

  checkForCardMatch(): void {
    setTimeout(() => {
      const cardOne = this.flippedCards[0];
      const cardTwo = this.flippedCards[1];
      const nextState = cardOne.imageId === cardTwo.imageId ? 'matched' : 'default';
      cardOne.state = cardTwo.state = nextState;

      this.flippedCards = [];

      if (nextState === 'matched') {
        this.matchedCount++;

        if (this.matchedCount === this.cardImages.length) {
          const canvas = this.renderer2.createElement('canvas');

          this.renderer2.appendChild(this.elementRef.nativeElement, canvas);

          const myConfetti = confetti.create(canvas, {
            resize: true
          });

          myConfetti({
            angle: this.randomInRange(55, 125),
            spread: this.randomInRange(50, 70),
            particleCount: this.randomInRange(50, 100),
            origin: { y: 0.6 }
          });

          myConfetti();
          const dialogRef = this.dialog.open(RestartDialogComponent, {
            disableClose: true
          });

          dialogRef.afterClosed().subscribe(() => {
            this.restart();
          });
        }
      }

    }, 1000);
  }

  goBack() {
    this.router.navigateByUrl('/', { state: { displayInitialScreen: false } });
  }

  restart(): void {
    this.matchedCount = 0;
    this.setupCards();
  }

  randomInRange(min: any, max: any) {
    return Math.random() * (max - min) + min;
  }
}
