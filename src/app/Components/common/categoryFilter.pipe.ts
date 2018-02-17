import { Pipe } from "@angular/core";
import { Product } from "../../model/product.model";
import { PipeTransform } from "@angular/core/src/change_detection/pipe_transform";

@Pipe({
    name: "filter",
    pure: false
})
export class PaCategoryFilterPipe implements PipeTransform {
    transform(products: Product[], category: string): Product[] {
        return category == undefined || category == "All" ?
            products : products.filter(p => p.category == category);
    }
} 