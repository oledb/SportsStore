import { Pipe, Injectable } from "@angular/core";
import { DiscountService } from "./discount.service";
import { PipeTransform } from "@angular/core/src/change_detection/pipe_transform";

@Pipe({
    name: "discount",
    pure: false
})
export class PaDiscountPipe implements PipeTransform{
    
    constructor(private discount: DiscountService) { }

    transform(price: number): number {
        return this.discount.applyDiscount(price);
    }
}