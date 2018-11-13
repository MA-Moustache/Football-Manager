import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Joueur} from './joueur';
import {Infrastructure} from './infrastructure';

@Injectable({
  providedIn: 'root'
})
export class InfraDataService {

  public static readonly URL_API_INFRASTRUCTURE: string = '/api/infra';


  constructor(public http: HttpClient) { }

  public query(): Observable<Infrastructure[]> {
    return this.http.get<Infrastructure[]>(InfraDataService.URL_API_INFRASTRUCTURE);
  }

  public post(infra: Infrastructure): Observable<Infrastructure[]> {
    return this.http.post<Infrastructure[]>(InfraDataService.URL_API_INFRASTRUCTURE, infra.toJson());
  }
}
