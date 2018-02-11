import { Component, Input } from "@angular/core";
import { Model } from "../model/repository.model";
import { Product } from "../model/product.model";

@Component({
    selector: "paProductTable",
    templateUrl: "./productTable.component.html"
})
export class ProductTableComponent {
    @Input("model")
    dataModel: Model;

    text = "Table will go here, bro!";

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