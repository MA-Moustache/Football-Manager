import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Joueur} from './joueur';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerDataServiceService {

  public static readonly URL_API_JOUEUR: string = '/api/joueur';





  constructor(public http: HttpClient) { }

  public query(): Observable<Joueur[]> {
    return this.http.get<Joueur[]>(PlayerDataServiceService.URL_API_JOUEUR);
  }

  public post(joueur: Joueur): Observable<Joueur[]> {
    return this.http.post<Joueur[]>(PlayerDataServiceService.URL_API_JOUEUR, joueur.toJson());
  }
}
