import { Component, OnInit } from '@angular/core';
import { Homewrk } from '../homewrk';

@Component({
  selector: 'app-homewrk',
  templateUrl: './homewrk.component.html',
  styleUrls: ['./homewrk.component.css']
})
export class HomewrkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  model=new Homewrk("","")

  done(){
    console.log("mob",this.model.mobile)
    console.log("mail",this.model.email)
  }

}
