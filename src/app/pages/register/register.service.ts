import { Injectable } from '@angular/core';
import {HttpClient}from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _HttpClient:HttpClient) { }

  register(data):Observable<any>{
    return this._HttpClient.post('https://routeegypt.herokuapp.com/signup',data)
  }


}
