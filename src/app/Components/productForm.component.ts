import { Component, Output, EventEmitter } from "@angular/core";
import { Product } from "../model/product.model";
import { NgForm } from "@angular/forms";
import { Model } from "../model/repository.model";

@Component({
    selector: "paProductForm",
    templateUrl: "productForm.component.html",
    styles: ["label:hover {color: #0072C6}"]
})
export class ProductFormComponent {
    newProduct: Product = new Product();
    error: string = "";

    constructor(private model: Model) {}

    addProduct(form: NgForm) {
        if (form.valid){
            this.model.addProduct(this.newProduct);
            this.error = "";
            this.newProduct = new Product();
            form.reset();
        }
        else {
            this.error = "Form is invalid!";
        }
    }
}