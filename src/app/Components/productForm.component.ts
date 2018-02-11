import { Component, Output, EventEmitter } from "@angular/core";
import { Product } from "../model/product.model";
import { NgForm } from "@angular/forms";

@Component({
    selector: "paProductForm",
    templateUrl: "productForm.component.html"
})
export class ProductFormComponent {
    newProduct: Product = new Product();
    error: string = "";
    addProduct(form: NgForm) {
        if (form.valid){
            console.log(JSON.stringify(this.newProduct));
            this.error = "";
            this.newProduct = new Product();
        }
        else {
            this.error = "Form is invalid!";
        }
        
    }
}