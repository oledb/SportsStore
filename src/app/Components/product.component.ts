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

    get count(): number {
        return this.model.getProducts().length;
    }

    get isFull(): boolean {
        return this.model.getProducts().length > 5;
    }

    getProductStatus(): string {
        return this.model.getProducts().length > 5 ? 'bg-success' : 'bg-warning';
    }

    getProduct(id: number): Product {
        return this.model.getProduct(id);
    }
}
