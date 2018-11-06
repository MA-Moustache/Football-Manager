import {Component, Input, OnInit} from '@angular/core';
import {Joueur} from '../joueur';

@Component({
  selector: 'app-show-table',
  templateUrl: './show-table.component.html',
  styleUrls: ['./show-table.component.css']
})
export class ShowTableComponent implements OnInit {

  private _joueurs:Joueur[] = [];

  constructor() { }

  ngOnInit() {
  }

  get players(): Joueur[] {
    return this._joueurs;
  }

  @Input()
  set joueurs(value: Joueur[]) {
    this._joueurs = value;
  }
}
