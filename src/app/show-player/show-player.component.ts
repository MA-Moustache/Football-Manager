import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-show-player',
  templateUrl: './show-player.component.html',
  styleUrls: ['./show-player.component.css']
})
export class ShowPlayerComponent implements OnInit {
 rangeAttaque :number;
 rangeDefense:number;
  constructor() { }

  ngOnInit(): void {
  }

}
