import { Component } from '@angular/core';
import { Product } from '../model/Product';
import { ProductRepository } from '../model/static.repository';
import { Cart } from '../model/cart.model';

@Component({
    selector: "store",
    moduleId: module.id,
    templateUrl: "store.component.html"
})
export class StoreComponent{
    public selectedCategory = null;
    public productPerPage = 4;
    public selectedPage = 1;

    constructor(private repository: ProductRepository,
                private cart: Cart){}

    get products(): Product[]{
        let pageIndex =(this.selectedPage - 1) * this.productPerPage;
        return this.repository.getProducts(this.selectedCategory)
            .slice(pageIndex, pageIndex + this.productPerPage);
    }

    get categories(): string[]{
        return this.repository.getCategories();
    }

    changeCategory(newCategory?: string){
        console.log(newCategory);
        this.selectedCategory = newCategory;
    }

    changePage(newPage: number){
        this.selectedPage = newPage;
    }

    changePageSize(newSize: number){
        this.productPerPage = Number(newSize);
        this.changePage(1);
    }

    get pageCount(): number{
        return Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productPerPage)
    }

    addProductToCart(product: Product){
        this.cart.addLine(product);
    }
}