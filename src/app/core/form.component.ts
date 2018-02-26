import { Component, Inject } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model"
import { MODES, SharedState, SHARED_STATE } from "./sharedState.model";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";
import "rxjs/add/operator/distinctUntilChanged"

@Component({
    // tslint:disable-next-line:component-selector
    selector: "paForm",
    moduleId: module.id,
    templateUrl: "form.component.html",
    styleUrls: ["form.component.css"]
})
export class FormComponent {
    product: Product = new Product();
    lastId: number;
    editing = false;

    constructor(private model: Model,
            @Inject(SHARED_STATE) private stateEvents: Observable<SharedState>) {
                stateEvents
                .subscribe((update) => {
                    this.editing = update.mode === MODES.EDIT;
                    this.product = new Product();
                    if (update.id !== undefined) {
                        Object.assign(this.product, this.model.getProduct(update.id));
                    }
                });
             }

    submitForm(form: NgForm) {
        if (form.valid) {
            console.log("model is valid");
            this.model.saveProduct(this.product);
            this.product = new Product();
            form.reset();
        } else {
        console.log("model is invalid");
        }
    }

    resetForm() {
        this.product = new Product();
    }
}