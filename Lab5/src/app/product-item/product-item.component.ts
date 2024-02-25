import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product, products} from "../products";
import {RouterLink} from "@angular/router";
import {ProductService} from "../product.service";

@Component({
    selector: 'app-product-item',
    standalone: true,
    imports: [
        RouterLink
    ],
    templateUrl: './product-item.component.html',
    styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnInit{

    @Input({required: true}) product!: Product
    @Output() deleteItemEvent = new EventEmitter()

    likes: number = 0

    constructor(
        private productService: ProductService
    ) {
    }

    like() {
        this.productService.likeProduct(this.product.id)
        this.likes = this.product.likeCount
    }

    deleteItem() {
        this.deleteItemEvent.emit()
    }

    ngOnInit() {
        this.likes = this.product.likeCount
    }
}
