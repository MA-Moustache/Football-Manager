import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {Joueur} from '../joueur';
import {PlayerDataServiceService} from '../player-data-service.service';

@Component({
  selector: 'app-smart-player-manager',
  templateUrl: './smart-player-manager.component.html',
  styleUrls: ['./smart-player-manager.component.css']
})
export class SmartPlayerManagerComponent implements OnInit, OnDestroy {

  private _players: Joueur[] = [];
  private _subQueryPlayers: Subscription;

  constructor(public playerService: PlayerDataServiceService) { }

  ngOnInit() {
    this.getPlayers();
  }

  ngOnDestroy() {
    if(this._subQueryPlayers) {
      this._subQueryPlayers.unsubscribe();
    }
  }

  getPlayers(){
    this._subQueryPlayers = this.playerService.query().subscribe(players => this._players = players.map(player => new Joueur().fromJson(player)));
  }

  get joueurs(): Joueur[] {
    return this._players;
  }

  set joueurs(value: Joueur[]) {
    this._players = value;
  }

  postJoueur(todo: Joueur) {
    // NE PAS OUBLIER LE SUBSCRIPTION
    this.playerService.post(todo).subscribe();
  }
}
