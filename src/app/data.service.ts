import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Data } from './data';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {
	private url='https://cs251-outlab-6.herokuapp.com/initial_values/';
	private posturl= 'https://cs251-outlab-6.herokuapp.com/add_new_feedback/';
  constructor( private http: HttpClient ) {  }
  getrequest(): Observable<Data>{
  	return this.http.get<Data>(this.url)
  }
	postrequest(data: Data):Observable<Data>{
	return this.http.post<any>(this.posturl, data)
	} 

}
