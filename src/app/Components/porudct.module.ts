import { NgModule } from '@angular/core';
import { ProductComponent } from './product.component';

@NgModule({
    exports: [ProductComponent],
    declarations: [ProductComponent]
})
export class ProductModule {}
