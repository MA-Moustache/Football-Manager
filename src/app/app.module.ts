import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ShowTableComponent} from './show-list-players/show-table.component';
import {RouterModule, Routes} from '@angular/router';
import { IndexComponent } from './index/index.component';
import { FourOFourComponent } from './four-o-four/four-o-four.component';
import { ShowPlayerComponent } from './show-player/show-player.component';
import { LoginComponent } from './auth/sign-in/login.component';
import { MatSliderModule , MatFormFieldModule , MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ShowListInfrastructuresComponent } from './show-list-infrastructures/show-list-infrastructures.component';
import { ShowMailComponent } from './show-mail/show-mail.component';
import { SmartPlayerManagerComponent } from './smart-player-manager/smart-player-manager.component';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  {
    path: 'IndexComponent', component: IndexComponent
  },
  {
    path: 'ShowTableComponent', component: ShowTableComponent
  },
  {
    path: 'ShowPlayerComponent', component: ShowPlayerComponent
  },
  {
    path: 'LoginComponent', component: LoginComponent
  },
  {
    path: 'DashboardComponent', component: DashboardComponent
  },
  {
    path: 'SignUpComponent', component: SignUpComponent
  },
  {
    path: 'ShowListInfrastructuresComponent', component: ShowListInfrastructuresComponent
  },
  {
    path: 'ShowMailComponent', component: ShowMailComponent
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
    ShowPlayerComponent,
    LoginComponent,
    DashboardComponent,
    SignUpComponent,
    ShowListInfrastructuresComponent,
    ShowMailComponent,
    SmartPlayerManagerComponent,
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
