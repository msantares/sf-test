import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.styl']
})
export class ProductItemComponent implements OnInit {
  @Input() product;

  constructor() { }

  ngOnInit() {
  }

}
