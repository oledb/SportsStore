import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [ BrowserModule, FormsModule, ReactiveFormsModule ],
    exports: [ProductComponent],
    declarations: [ProductComponent]
})
export class ProductModule {}
