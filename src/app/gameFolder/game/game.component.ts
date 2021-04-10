import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RestartDialogComponent } from '../restart-dialog/restart-dialog.component';
import { CardData } from '../../shared/models/card-data.model';
import {Location} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  cardImages = [
    'pDGNBK9A0sk',
    'fYDrhbVlV1E',
    'qoXgaF27zBc',
    'b9drVB7xIOI',
    'TQ-q5WAVHj0'
  ];


  cards: CardData[] = [];
  
  flippedCards: CardData[] = [];

  matchedCount = 0;

  shuffleArray(anArray: any[]): any[] {
    return anArray.map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  }

  constructor(private dialog: MatDialog, private _location: Location, private router: Router) {

  }

  ngOnInit(): void {
    this.setupCards();

    if(this.router.url.includes('dinossaur')){
      //MUDAR PARA OS IDS APROPRIADOS
      this.cardImages = [
        'pDGNBK9A0sk',
        'fYDrhbVlV1E',
        'qoXgaF27zBc',
        'b9drVB7xIOI',
        'TQ-q5WAVHj0'
      ];
    }

    if(this.router.url.includes('space')){
      //MUDAR PARA OS IDS APROPRIADOS
      this.cardImages = [
        'pDGNBK9A0sk',
        'fYDrhbVlV1E',
        'qoXgaF27zBc',
        'b9drVB7xIOI',
        'TQ-q5WAVHj0'
      ];
    }

    if(this.router.url.includes('lego')){
     //MUDAR PARA OS IDS APROPRIADOS
      this.cardImages = [
        'pDGNBK9A0sk',
        'fYDrhbVlV1E',
        'qoXgaF27zBc',
        'b9drVB7xIOI',
        'TQ-q5WAVHj0'
      ];
    }
  }

  setupCards(): void {
    this.cards = [];
    this.cardImages.forEach((image) => {
      const cardData: CardData = {
        imageId: image,
        state: 'default'
      };

      this.cards.push({...cardData});
      this.cards.push({...cardData});
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

  goBack(){
    this._location.back();
  }

  restart(): void {
    this.matchedCount = 0;
    this.setupCards();
  }
}
