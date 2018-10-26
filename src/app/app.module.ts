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
import { SignUpComponent } from './auth/sign-up/sign-up.component';

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
    path: 'Dashboard', component: DashboardComponent
  },
  {
    path: 'SignUpComponent', component: SignUpComponent
  },
  {
    path: 'SignUpComponent', component: SignUpComponent
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
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
