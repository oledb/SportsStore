import { Component, Input } from "@angular/core";
import { DiscountService } from "./discount.service";

@Component({
    selector: "paDiscountDisplay",
    template: `<div class="bg-info p-1 text-white">
            The discount is {{discounter.discount}}
            </div>`
})
export class PaDiscountDisplayComponent {
    constructor(private discounter: DiscountService) { }
}