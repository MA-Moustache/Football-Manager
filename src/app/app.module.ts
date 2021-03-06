import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ShowTableComponent} from './show-table/show-table.component';
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
import {HttpClientModule} from '@angular/common/http';
import { SmartPlayerManagerComponent } from './smart-player-manager/smart-player-manager.component';
import { CreateMailComponent } from './create-mail/create-mail.component';
import { SentMailComponent } from './sent-mail/sent-mail.component';
import { SmartInfraManagerComponent } from './smart-infra-manager/smart-infra-manager.component';
import { CreatePlayerComponent } from './create-player/create-player.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  {
    path: 'IndexComponent', component: IndexComponent
  },
  {
    path: 'SmartPlayerManagerComponent', component: SmartPlayerManagerComponent
  },
  {
    path: 'CreatePlayerComponent', component: CreatePlayerComponent
  },
  {
    path: 'SmartInfraManagerComponent', component: SmartInfraManagerComponent
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
    path: 'CreateMailComponent', component: CreateMailComponent
  },
  {
    path: 'SentMailComponent', component: SentMailComponent
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
    CreateMailComponent,
    SentMailComponent,
    SmartPlayerManagerComponent,
    SmartInfraManagerComponent,
    CreatePlayerComponent,
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
