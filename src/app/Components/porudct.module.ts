import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    exports: [ProductComponent],
    declarations: [ProductComponent]
})
export class ProductModule {}
