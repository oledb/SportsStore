import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProductTableComponent } from "./productTable.component";
import { ProductFormComponent } from "./productForm.component";
import { FormsModule } from "@angular/forms";
import { PaToggleView } from "./toggleView.component";
import { PaAddTaxPipe } from "./addTax.pipe";
import { PaCategoryFilterPipe } from "./categoryFilter.pipe";
import { PaDiscountDisplayComponent } from "./discountDisplay.component";
import { PaDiscountEditorComponent } from "./discountEditor.component";

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    exports: [ProductComponent],
    declarations: [ ProductComponent, 
        ProductFormComponent, 
        ProductTableComponent,
        PaToggleView,
        PaAddTaxPipe,
        PaCategoryFilterPipe,
        PaDiscountDisplayComponent,
        PaDiscountEditorComponent ]
})
export class ProductModule {}
