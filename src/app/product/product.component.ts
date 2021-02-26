import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  model=new Product("","","","")
  submit(){
    console.log("id",this.model.productid)
    console.log("name",this.model.productname)
    console.log("price",this.model.productprice)
    console.log("des",this.model.productdes)
  }

}
