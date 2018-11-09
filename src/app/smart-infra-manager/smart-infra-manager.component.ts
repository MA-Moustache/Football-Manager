import {Component, OnDestroy, OnInit} from '@angular/core';
import {Joueur} from '../joueur';
import {Subscription} from 'rxjs';
import {PlayerDataServiceService} from '../player-data-service.service';
import {Infrastructure} from '../infrastructure';
import {InfraDataService} from '../infra-data.service';

@Component({
  selector: 'app-smart-infra-manager',
  templateUrl: './smart-infra-manager.component.html',
  styleUrls: ['./smart-infra-manager.component.css']
})
export class SmartInfraManagerComponent implements OnInit, OnDestroy {

  private _infras: Infrastructure[] = [];
  private _subQueryInfras: Subscription;

  constructor(public infraService: InfraDataService) { }

  ngOnInit() {
    this.getInfrastructures();
  }

  ngOnDestroy() {
    if(this._subQueryInfras) {
      this._subQueryInfras.unsubscribe();
    }
  }

  getInfrastructures(){
    // @ts-ignore
    this._subQueryInfras = this.infraService.query().subscribe(infras => this._infras = infras.map(infra => new Infrastructure().fromJson(infra)));
  }

  get infras(): Infrastructure[] {
    return this._infras;
  }

  set infras(value: Infrastructure[]) {
    this._infras = value;
  }

  postInfra(infra: Infrastructure) {
    // NE PAS OUBLIER LE SUBSCRIPTION
    this.infraService.post(infra).subscribe();
  }
}
