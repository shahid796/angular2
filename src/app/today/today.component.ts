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
  array2:any[]=[]
  ind:any
  ind2:any
  

  
  
  

  constructor() { }
  

  ngOnInit(): void {
  }
setnum(event:any){
  this.value1=(event.target as HTMLInputElement).value
  
}
savearray(){
  
  this.array.push(this.value1)
  
  console.log(this.array)
  
}
remove(a:any){
  this.ind=this.array.indexOf(a)
  this.array.splice(this.ind,1)
  console.log(this.array)

}
move(b:any){
   this.ind=this.array.indexOf(b)
  this.array2.push(b)
  



}
remove2(n:any){
  this.ind2=this.array2.indexOf(n)
  this.array2.splice(this.ind2,1)
  console.log(this.array2)
}
clear(){
  this.value1=""
}


}
