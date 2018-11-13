import { Component, OnInit } from '@angular/core';
import {ShowTableComponent} from '../show-list-players/show-table.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  moyenneAttaque = 6;
  moyenneDefense = 3;
  showtbls = new ShowTableComponent();
  constructor() {
  }

    ngOnInit() {

    }

    getMoyenne() {
      return ((this.showtbls.getattaque1() + this.showtbls.getattaque2()) / 2);
    }

}
