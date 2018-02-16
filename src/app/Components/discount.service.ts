import { Injectable } from "@angular/core";
import { LogService } from "app/Components/log.service";

@Injectable()
export class DiscountService {
    private discountValue: number = 10;

    constructor(private logger: LogService) { }

    public get discount(): number {
        return this.discountValue;
    }

    public set discount(newValue: number) {
        if (newValue <= 0)
            this.discountValue = 0;
        else if (newValue >= 30)
            this.discountValue = 30;
        else
            this.discountValue = newValue;
    }

    public applyDiscount(price: number) {
        this.logger.logInfoMessage(`Discount ${this.discount}
            applied to price ${price}`);
        return price - (price * this.discountValue / 100);
    }
}