import { Component, Output, EventEmitter } from "@angular/core";
import { Product } from "../model/product.model";
import { NgForm } from "@angular/forms";

@Component({
    selector: "paProductForm",
    templateUrl: "productForm.component.html",
    styles: ["label:hover {color: #0072C6}"]
})
export class ProductFormComponent {
    newProduct: Product = new Product();
    error: string = "";

    @Output("paNewProduct")
    newProductEvent = new EventEmitter<Product>();

    addProduct(form: NgForm) {
        if (form.valid){
            this.newProductEvent.emit(this.newProduct);
            this.error = "";
            this.newProduct = new Product();
            form.reset();
        }
        else {
            this.error = "Form is invalid!";
        }
    }
}