import { Component, Input } from "@angular/core";
import { Model } from "../model/repository.model";
import { Product } from "../model/product.model";
import { DiscountService } from "./discount.service";

@Component({
    selector: "paProductTable",
    templateUrl: "./productTable.component.html",
    styles: [`tr.data:hover {background-color: #007bff; color: white}`]
})
export class ProductTableComponent {
    @Input("product-model")
    dataModel: Model;
    discounter: DiscountService = new DiscountService();

    categoryFilter: string = "Chess";
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