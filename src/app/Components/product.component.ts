import { Component } from '@angular/core';
import { Model } from '../model/repository.model';
import { Product } from '../model/product.model';

@Component({
    selector: 'app-products',
    moduleId: module.id,
    templateUrl: './product.component.html'
})
export class ProductComponent {
    selectedStyle = 'bg-success text-white';

    model: Model = new Model();
    selectedId: number;

    selectProduct(id: number) {
        this.selectedId = id;
    }

    get selected(): Product {
        return this.getProduct(this.selectedId);
    }

    getProduct(id: number): Product {
        return this.model.getProduct(id);
    }

    getProducts(): Product[] {
        return this.model.getProducts();
    }
}
