import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Joueur} from '../joueur';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css']
})
export class CreatePlayerComponent implements OnInit {

  private _joueurTmp: Joueur = new Joueur;
  private _joueurCreated:EventEmitter<Joueur> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  get joueurTmp(): Joueur {
    return this._joueurTmp;
  }

  createJoueur() {
    this._joueurCreated.next(this._joueurTmp);
    this.reset();
  }

  reset() {
    this._joueurTmp = new Joueur();
  }

  @Output()
  get joueurCreated(): EventEmitter<Joueur> {
    return this.joueurCreated;
  }

}
