import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { CartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public products: any = [];
  public grandTotal !: number;
  constructor(private cartService :  CartService, public activeModal: NgbActiveModal) {
   
   }


  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item: any){
    item.qty=1
    this.cartService.removeCartItem(item);
  }

  changeQuantity(item:any, qty:string){
    let quantity= parseInt(qty);
    item.qty=qty
    this.grandTotal=this.cartService.getTotalPrice();
  }

}
