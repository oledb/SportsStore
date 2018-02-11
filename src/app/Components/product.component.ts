import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Model } from '../model/repository.model';
import { Product } from '../model/product.model';

@Component({
    selector: 'app-products',
    moduleId: module.id,
    templateUrl: './product.component.html'
})
export class ProductComponent {

    myModel: Model = new Model();
    
}
