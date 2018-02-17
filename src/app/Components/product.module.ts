import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProductTableComponent } from "./productTable.component";
import { ProductFormComponent } from "./productForm.component";
import { FormsModule } from "@angular/forms";
import { PaToggleView } from "./toggleView.component";
import { PaAddTaxPipe } from "./common/addTax.pipe";
import { PaCategoryFilterPipe } from "./common/categoryFilter.pipe";
import { PaDiscountDisplayComponent } from "./discountDisplay.component";
import { PaDiscountEditorComponent } from "./discountEditor.component";
import { DiscountService } from "./discount.service";
import { PaDiscountPipe } from "./common/discount.pipe";
import { ModelModule } from "../model/model.module";

@NgModule({
    imports: [ BrowserModule, FormsModule, ModelModule ],
    exports: [ProductComponent],
    providers: [ DiscountService],
    declarations: [ ProductComponent, 
        ProductFormComponent, 
        ProductTableComponent,
        PaToggleView,
        PaAddTaxPipe,
        PaCategoryFilterPipe,
        PaDiscountPipe ]
})
export class ProductModule {}
