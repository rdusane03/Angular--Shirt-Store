import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public productList : any ;
  public cartList:[] =[];
  constructor(private productService:ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  addToCart(item: any){
  const cartItems=  this.cartService.getProducts().subscribe(res =>{
    this.cartList= res;
  })
  let productExistInCart = this.cartList.find(({id}) => id === item.id);
  if(productExistInCart){
    item.qty++;
  }else{
    this.cartService.addtoCart(item);
  }
  }

  getAllProducts(){
    this.productService.getAll().subscribe( res =>{
      this.productList=res;

      this.productList.forEach((a:any) => {
        Object.assign(a,{qty:1,total:a.price});
        
      });

    })
  }
}
