import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _HttpClient:HttpClient) { }

    getData(city):Observable<any>{
    return this._HttpClient.get(`
    https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe589bd3e84c027879470f5b082b67e1
    `)
  }


}





