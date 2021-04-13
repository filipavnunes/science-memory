import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-initial-menu-video',
  templateUrl: './initial-menu-video.component.html',
  styleUrls: ['./initial-menu-video.component.scss']
})
export class InitialMenuVideoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
