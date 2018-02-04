import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [ BrowserModule ],
    exports: [ProductComponent],
    declarations: [ProductComponent]
})
export class ProductModule {}
