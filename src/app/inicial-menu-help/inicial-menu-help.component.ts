import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-inicial-menu-help',
  templateUrl: './inicial-menu-help.component.html',
  styleUrls: ['./inicial-menu-help.component.scss']
})
export class InicialMenuHelpComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
