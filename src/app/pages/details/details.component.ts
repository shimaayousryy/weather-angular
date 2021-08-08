import { Component, OnInit } from '@angular/core';
import {DetailsService} from './details.service';
import {ActivatedRoute} from '@angular/router';
import {Data} from './details.model'
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
city:any;
dayNum:any;
daysWeather:any;
name:string;
cityname:any;
dt:string;
allDate:any[]=[];
temp:any;
xx:any;
daysList:number[] =[];
mm:any;
new:string[] =[]


productList: Data[] = [];
 productObj:Data = new Data();

  constructor(private homeServ:DetailsService , private ActivatedRoute:ActivatedRoute) {
    this.city = ActivatedRoute.snapshot.paramMap.get('city');
    this.dayNum = ActivatedRoute.snapshot.paramMap.get('dayNum')
 }

  ngOnInit(): void {
    this.productObj =new Data();
    this.getALLWeather('cairo',3);
  }

  getALLWeather(cityname , daysWeather){
    this.homeServ.getAllData(cityname , daysWeather).subscribe( (data) => {
   this.city =cityname;
   this.dayNum=daysWeather;
   this.productList = data.list.map((item) =>{
    
    this.name = data.list[0].name;
  
     this.temp =Math.round(item.main.temp / 10)
     this.productList.push(this.temp)
    //  console.log(this.productList.push(this.temp));
     return item;

   })

  

  })
}

}
