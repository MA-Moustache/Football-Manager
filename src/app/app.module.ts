import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ShowTableComponent} from './show-list-players/show-table.component';
import {RouterModule, Routes} from '@angular/router';
import { IndexComponent } from './index/index.component';
import { FourOFourComponent } from './four-o-four/four-o-four.component';

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
    path: 'FouroFour', component: FourOFourComponent
  },
  {
    path: '**', redirectTo: '/FouroFour' // Obligatoirement à la fin!
  }
];
@NgModule({
  declarations: [
    AppComponent,
    ShowTableComponent,
    IndexComponent,
    FourOFourComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
