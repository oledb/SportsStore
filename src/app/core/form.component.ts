import { Component, Inject } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model"
import { MODES, SharedState, SHARED_STATE } from "./sharedState.model";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged'

@Component({
    selector: "paForm",
    moduleId: module.id,
    templateUrl: "form.component.html",
    styleUrls: ["form.component.css"]
})
export class FormComponent {
    product: Product = new Product();
    lastId: number;

    constructor(private model: Model,
            @Inject(SHARED_STATE) private stateEvents: Observable<SharedState>) {
                stateEvents
                .map(state => state.mode == MODES.EDIT ? state.id : - 1)
                .distinctUntilChanged()
                .filter(id => id != 3)
                .subscribe((id) => {
                    this.product = new Product();
                    if (id != undefined) {
                        Object.assign(this.product, this.model.getProduct(id));
                    }
                });
             }
    
    editing: boolean = false;

    submitForm(form: NgForm) {
        if (form.valid) {
            console.log('model is valid');
            this.model.saveProduct(this.product);
            this.product = new Product();
            form.reset();
        } else
        console.log('model is invalid');
    }

    resetForm() {
        this.product = new Product();
    }
}
