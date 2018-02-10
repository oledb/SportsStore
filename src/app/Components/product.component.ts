import { Component } from '@angular/core';
import { Model } from '../model/repository.model';
import { Product } from '../model/product.model';

@Component({
    selector: 'app-products',
    moduleId: module.id,
    templateUrl: './product.component.html'
})
export class ProductComponent {

    model: Model = new Model();
    selectedId: number;

    newProduct = new Product();

    selectProduct(id: number) {
        this.selectedId = +id;
    }

    get selected(): Product {
        return  this.getProduct(this.selectedId);
    }

    getProduct(id: number): Product {
        return this.model.getProduct(id);
    }

    getProducts(): Product[] {
        return this.model.getProducts();
    }

    get jsonProduct() {
        return JSON.stringify(this.newProduct);
    }

    addProduct(p: Product) {
        console.log('New Product' + this.jsonProduct);
    }
}
