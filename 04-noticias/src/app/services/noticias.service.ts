import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaTopHeadlines } from '../pages/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor( private http: HttpClient) { }

  getTodosHeadlines(){
   return this.http.get<RespuestaTopHeadlines>(`http://newsapi.org/v2/everything?q=tesla&from=2021-01-24&sortBy=publishedAt&apiKey=cf7b4fbb186a4a85ae608467043d72e4`);
  }
}
