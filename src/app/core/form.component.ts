import { Component, Inject } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Product } from "../model/product.model";
import { Model } from "../model/repository.model"
import { ActivatedRoute } from "@angular/router";
// import { MODES, SharedState, SHARED_STATE } from "./sharedState.model";
// import { Observable } from "rxjs/Observable";
// import "rxjs/add/operator/filter";
// import "rxjs/add/operator/map";
// import "rxjs/add/operator/distinctUntilChanged"

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

    constructor(private model: Model, private activateRouter: ActivatedRoute) {
        this.editing = this.activateRouter.snapshot.params["mode"] === "edit";
        const id = this.activateRouter.snapshot.params["id"];
        if (id !== null) {
            Object.assign(this.product, this.model.getProduct(id) || new Product());
        }
    }

    submitForm(form: NgForm) {
        if (form.valid) {
            this.model.saveProduct(this.product);
            this.product = new Product();
            form.reset();
        }
    }

    resetForm() {
        this.product = new Product();
    }
}
