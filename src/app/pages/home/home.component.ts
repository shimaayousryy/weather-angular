import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { HomeService } from './home.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  city:any;
  humidity:any;
  wind:any;
  desc:string;
  loc:string;
  dt:string;
  pressure:number;
  temp:number;
  cityname:any;

  constructor(private homeServ:HomeService , private ActivatedRoute:ActivatedRoute) {
    this.city = ActivatedRoute.snapshot.paramMap.get('city')
 }
  ngOnInit(): void {
    this.findCity('cairo');
     }


  findCity(cityname){
      this.homeServ.getData(cityname).subscribe( (data) => {
      this.humidity = data.main.humidity;
      this.temp = Math.round(data.main.temp/10);
      this.pressure = Math.round(data.main.pressure *0.75006375541921)
     this.wind =data.wind.deg;
     this.loc = data.name;
     this.desc =  data.weather[0].description;
     this.dt = data.dt;
     this.city =cityname
     
    })
  }
}
