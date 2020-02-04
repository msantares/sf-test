import { Component, OnInit } from '@angular/core';
import {ProductService} from "../product.service";
import {first} from "rxjs/operators";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.styl']
})
export class ProductListComponent implements OnInit {
  products = null;

  constructor(
    private productsService: ProductService,
  private sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.productsService.getProducts()
      .pipe(first())
      .subscribe(products => this.products = products)
  }
}
