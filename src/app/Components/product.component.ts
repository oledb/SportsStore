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

    infoStyle = 'bg-info text-white p-1 mt-1';

    targetName = 'Kayak';

    get count(): number {
        return this.getProducts().length;
    }

    getProductByPosition(position: number): Product {
        return this.model.getProducts()[position];
    }

    getProduct(id: number): Product {
        return this.model.getProduct(id);
    }

    getProducts(): Product[] {
        return this.model.getProducts();
    }

    getProductCount(): number {
        return this.count;
    }
}
