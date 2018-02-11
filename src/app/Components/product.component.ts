import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Model } from '../model/repository.model';
import { Product } from '../model/product.model';
import { ProductFormGroup } from "./form.model";

@Component({
    selector: 'app-products',
    moduleId: module.id,
    templateUrl: './product.component.html'
})
export class ProductComponent {

    model: Model = new Model();
    selectedId: number;
    form: ProductFormGroup = new ProductFormGroup();

    newProduct = new Product();

    selectProduct(id: number) {
        this.selectedId = +id;
    }

    get selected(): Product {
        return this.getProduct(this.selectedId);
    }

    getProduct(id: number): Product {
        return this.model.getProduct(id);
    }

    getProducts(): Product[] {
        return this.model.getProducts();
    }

    get jsonProduct() {
        return JSON.stringify(this.newProduct);
    }
    formSubmitted: boolean = false;
    addProduct(form: NgForm) {
        this.formSubmitted = true;
        if (form.valid){
            console.log('New Product' + this.jsonProduct);
            this.newProduct = new Product();
            form.reset();
            this.formSubmitted = false;
        }
    }

    // getValidationMessages(state: any, thingName?: string): string[] {
    //     const thing: string = state.path || thingName;
    //     const message: string[] = [];
    //     if (state.errors) {
    //         for (const errorName in state.errors) {
    //             if (state.errors.hasOwnProperty(errorName)) {
    //                 switch (errorName) {
    //                     case 'required':
    //                         message.push(`You must enter a ${thing}`);
    //                         break;
    //                     case 'minlength':
    //                         message.push(`A ${thing} must be at least ${state.errors['minlength'].requiredLength}`);
    //                         break;
    //                     case 'pattern':
    //                         message.push(`The ${thing} contains illegal character`);
    //                         break;
    //                     default:
    //                         throw new Error(`Unkown property ${errorName}`);
    //                 }
    //             } else {
    //                 throw new Error(`No property ${errorName}`);
    //             }
    //         }
    //     }
    //     return message;
    // }
}
