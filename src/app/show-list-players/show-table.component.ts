import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-table',
  templateUrl: './show-table.component.html',
  styleUrls: ['./show-table.component.css']
})
export class ShowTableComponent implements OnInit {

  attaque1 = 56;
  attaque2 = 100;

  constructor() { }

  ngOnInit(): void {
  }

  getattaque1() {
    return this.attaque1;
  }

  getattaque2() {
    return this.attaque2;
  }
}
