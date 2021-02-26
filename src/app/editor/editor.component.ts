import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name=new FormControl("shahid")
  email=new FormControl("abc@gmail.com")
  password=new FormControl("abcde")
  mobile=new FormControl('9867904560')
  save(){
    console.log(this.name.value)
    console.log(this.email.value)
    console.log(this.password.value)
    console.log(this.mobile.value)
  }

}
