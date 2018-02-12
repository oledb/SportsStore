import { Pipe } from "@angular/core";
import { Product } from "../model/product.model";
import { PipeTransform } from "@angular/core/src/change_detection/pipe_transform";

@Pipe({
    name: "filter",
    pure: true
})
export class PaCtegoryFilterPipe implements PipeTransform {
    transform(products: Product[], category: string): Product[] {
        throw new Error("Method not implemented.");
    }
}