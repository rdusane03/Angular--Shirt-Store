import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from 'src/app/service/cart.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public products: any = [];
  public grandTotal !: number;
  public totalItem: number=0;
  constructor(private modalService: NgbModal, private cartService:CartService) { }

  ngOnInit(): void {

    this.cartService.getProducts().subscribe(res =>{
     this.totalItem= res.length;
     
    })

  }

  open() {
    const modalRef = this.modalService.open(CartComponent);
  }

}
