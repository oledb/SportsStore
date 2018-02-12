import { Pipe } from "@angular/core";
import { PipeTransform } from "@angular/core/src/change_detection/pipe_transform";

@Pipe({
    name: "addTax"
})
export class PaAddTaxPipe implements PipeTransform{
    defaultRate: number = 10;

    transform(value: any, rate?: any): number {
        let valueNumber = Number.parseFloat(value);
        let rateNumber = rate === undefined ? this.defaultRate : Number.parseFloat(rate);
        return valueNumber + (valueNumber * (rateNumber / 100));
    }
}