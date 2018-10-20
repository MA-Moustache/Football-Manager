import {Component, NgModule, OnInit} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShowPlayerComponent} from '../show-player/show-player.component';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from '../app.component';
import {IndexComponent} from '../index/index.component';
import {FourOFourComponent} from '../four-o-four/four-o-four.component';

const appRoutes: Routes = [
  {
    path: 'IndexComponent', component: IndexComponent
  },
  {
    path: 'ShowTableComponent', component: ShowTableComponent
  },
  {
    path: '', component: IndexComponent
  },
  {
    path: 'ShowPlayerComponent', component: ShowPlayerComponent
  },
  {
    path: 'FouroFour', component: FourOFourComponent
  },
  {
    path: '**', redirectTo: '/FouroFour' // Obligatoirement à la fin!
  }
];

@Component({
  selector: 'app-show-table',
  templateUrl: './show-table.component.html',
  styleUrls: ['./show-table.component.css']
})
export class ShowTableComponent implements OnInit {

  constructor() { }

  // @ts-ignore
  @NgModule({
    declarations: [
      AppComponent,
      ShowTableComponent,
      IndexComponent,
      FourOFourComponent,
      ShowPlayerComponent,
    ],
    imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
  })

  ngOnInit(): void {
  }
}
