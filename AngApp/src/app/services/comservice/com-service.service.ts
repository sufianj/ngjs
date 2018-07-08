import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {EchoServer} from '../../rootclass/echoserver/echo-server';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ComServiceService {

  constructor(private _http: HttpClient) { }
  echoCall(message: string): Observable<string> {
    return this._http
    .get<EchoServer>('http://localhost:3000/echo?message=' + message)
    .pipe(map((response: EchoServer): string => {
      return response.data;
    }));
  }
}
