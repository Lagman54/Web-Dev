import {Component, Input, OnInit} from '@angular/core';

import {Product, products} from '../products';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../product.service";

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {

    products: Product[] = []
    categoryId!: number

    constructor(
        private route: ActivatedRoute,
        private productService: ProductService
    ) {
    }

    share() {
        window.alert('The product has been shared!');
    }

    onNotify() {
        window.alert('You will be notified when the product goes on sale');
    }

    deleteProduct(id: number) {
        this.productService.deleteProduct(id)
        this.products = this.productService.getProductsByCategory(this.categoryId)
    }

    ngOnInit() {
        const routeParams = this.route.snapshot.paramMap;
        this.categoryId = Number(routeParams.get('categoryId'));

        this.products = this.productService.getProductsByCategory(this.categoryId)
    }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
