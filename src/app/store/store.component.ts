import { Component } from "@angular/core";
import { Product } from '../model/Product';
import { ProductRepository } from '../model/static.repository';

@Component({
    selector: "store",
    moduleId: module.id,
    templateUrl: "store.component.html"
})
export class StoreComponent{
    constructor(private repository: ProductRepository){}

    get products(): Product[]{
        return this.repository.getProducts();
    }

    get categories(): string[]{
        console.log(this.repository.getProducts());
        return this.repository.getCategories();
    }
}