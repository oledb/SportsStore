import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProductTableComponent } from "./productTable.component";
import { ProductFormComponent } from "./productForm.component";

@NgModule({
    imports: [ BrowserModule ],
    exports: [ProductComponent],
    declarations: [ ProductComponent, 
        ProductFormComponent, 
        ProductTableComponent ]
})
export class ProductModule {}
