import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  value1:string=""
  array:any[]=[]
  data:any[]=[]
  

  constructor() { }
  

  ngOnInit(): void {
  }
setnum(event:any){
  this.value1=(event.target as HTMLInputElement).value
  
}
savearray(){
  
  this.array.push(this.value1)
  console.log(this.array)
  this.data=this.array
}

}
