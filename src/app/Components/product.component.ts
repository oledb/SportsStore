import { Component } from '@angular/core';
import { Model } from '../model/repository.model'

@Component({
    selector: 'app-products',
    moduleId: module.id,
    templateUrl: './product.component.html'
})
export class ProductComponent {
    model: Model = new Model();
}
