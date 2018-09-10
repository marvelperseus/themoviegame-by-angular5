import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { scoreData } from './scoredats';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class MoviegameService {
  id: number;

  private scoredatasUrl = 'api/scoredatas';
  private datasUrl = 'api/datas';

  constructor( private http: HttpClient ) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  //get all datas from ther server
  getDatas (): Observable<Data[]> {
    return this.http.get<Data[]>(this.datasUrl)
      .pipe(
        catchError(this.handleError('getDatas', []))
      );
  }

  getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    //get one data by random from the server
  getData(): Observable<Data> {
    this.id=this.getRandomInt(10);
    const url = `${this.datasUrl}/${this.id}`;
    console.log(url);
    return this.http.get<Data>(url).pipe(
      catchError(this.handleError<Data>(`getData id=${this.id}`))
    );
  }

  //get all score datas from the server
  getScoreDatas (): Observable<scoreData[]> {

    return this.http.get<scoreData[]>(this.scoredatasUrl)
      .pipe(
        catchError(this.handleError('getScoreDatas', []))
      );
  }

}
