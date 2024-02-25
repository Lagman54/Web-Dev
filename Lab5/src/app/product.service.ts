import {Injectable} from '@angular/core';
import {products} from "./products";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    constructor() {
    }

    getProductsByCategory(categoryId: number) {
        return products.filter(product => product.categoryId == categoryId)
    }

    deleteProduct(productId: number) {
        let index = products.findIndex(product => product.id == productId)
        products.splice(index, 1)
    }

    likeProduct(productId: number) {
        let index = products.findIndex(product => product.id == productId)
        console.log(index)
        if (index != null) {
            products[index].likeCount++
        }
    }

}
