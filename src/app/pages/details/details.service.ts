import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(private _HttpClient:HttpClient) { }

  getAllData(city ,dayNum):Observable<any>{
    return this._HttpClient.get(`
    https://api.openweathermap.org/data/2.5/find?q=${city}&cnt=${dayNum}&appid=0f3fb9fa31ad3d41f1bb2bd0841c3f2f
    `)
  }

}
