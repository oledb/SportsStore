import { PaAddTaxPipe } from "./addTax.pipe";
import { PaCategoryFilterPipe } from "./categoryFilter.pipe";
import { PaDiscountPipe } from "./discount.pipe";
import { DiscountService } from "./discount.service";
import { LogService } from "./log.service";
import { NgModule } from "@angular/core";
import { ModelModule } from "../../model/model.module";

@NgModule({
    imports: [ ModelModule ], // modules
    providers: [  LogService, DiscountService ], // services
    declarations: [PaAddTaxPipe, PaCategoryFilterPipe,
        PaDiscountPipe], //pipes, componets, directives
    exports: [PaAddTaxPipe, PaCategoryFilterPipe,
        PaDiscountPipe] //pipes, componets, directives
})
export class CommonModule { }