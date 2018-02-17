import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProductTableComponent } from "./productTable.component";
import { ProductFormComponent } from "./productForm.component";
import { FormsModule } from "@angular/forms";
import { PaToggleView } from "./toggleView.component";
import { PaDiscountDisplayComponent } from "./discountDisplay.component";
import { PaDiscountEditorComponent } from "./discountEditor.component";
import { ModelModule } from "../model/model.module";
import { CommonModule } from "./common/common.module";

@NgModule({
    imports: [ BrowserModule, FormsModule, ModelModule, CommonModule ],
    exports: [ProductComponent],
    providers: [ ],
    declarations: [ ProductComponent, 
        ProductFormComponent, 
        ProductTableComponent,
        PaToggleView ]
})
export class ProductModule {}
