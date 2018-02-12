import { Component, Input } from "@angular/core";
import { Model } from "../model/repository.model";
import { Product } from "../model/product.model";

@Component({
    selector: "paProductTable",
    templateUrl: "./productTable.component.html",
    styles: [`tr.data:hover {background-color: #007bff; color: white}`]
})
export class ProductTableComponent {
    @Input("product-model")
    dataModel: Model;

    showTable: boolean = true;

    getProduct(id: number): Product {
        return this.dataModel.getProduct(id);
    }

    getProducts(): Product[] {
        return this.dataModel.getProducts();
    }

    deleteProduct(id: number) {
        this.dataModel.deleteProduct(id);
    }
}