import { Component } from '@angular/core';
import { Product } from "../model/Product";
import { ProductRepository } from "../model/static.repository";

@Component({
    moduleId: module.id,
    templateUrl: 'productTable.component.html'
})
export class ProductTableComponent{
    constructor(private repository: ProductRepository){}

    getProducts(): Product[]{
        return this.repository.getProducts();
    }

    deleteProduct(id: number){
        this.repository.deleteProduct(id);
    }
}