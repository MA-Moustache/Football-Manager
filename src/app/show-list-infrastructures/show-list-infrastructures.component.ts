import {Component, Input, OnInit} from '@angular/core';
import {Joueur} from '../joueur';
import {Infrastructure} from '../infrastructure';

@Component({
  selector: 'app-show-list-infrastructures',
  templateUrl: './show-list-infrastructures.component.html',
  styleUrls: ['./show-list-infrastructures.component.css']
})
export class ShowListInfrastructuresComponent implements OnInit {

  private _infras:Infrastructure[] = [];

  constructor() { }

  ngOnInit() {
  }

  get infras(): Infrastructure[] {
    return this._infras;
  }

  @Input()
  set infras(value: Infrastructure[]) {
    this._infras = value;
  }
}
