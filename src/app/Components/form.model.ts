import { FormControl, FormGroup, Validators } from '@angular/forms';

export class ProductFormControl extends FormControl {
    label: string;
    modelProperty: string;

    constructor(label: string, property: string, value: any, validator: any) {
        super(value, validator);
        this.label = label;
        this.modelProperty = property;
    }

    getValidationMessage(): string[] {
        let messages: string[] = [];
        if (this.errors) {
            for(let errorName in this.errors) {
                if (this[errorName] === undefined) {
                    throw new Error(`Validation type ${errorName} is undefined`);
                }
                messages.push(this[errorName]());
            }
        }
        return messages;
    }

    private required(): string {
        return `You must enter a ${this.label}`;
    }

    private minlength(): string {
        return `A ${this.label} must be at least ${this.errors['minlength'].requiredLength}`;
    }

    private maxlength(): string {
        return `A ${this.label} must be no more than ${this.errors['maxlength'].requiredLength}`;
    }

    private pattern(): string {
        return `The ${this.label} contains illegal character`;
    }
}

export class ProductFormGroup extends FormGroup {
    constructor() {
        super({
            name: new ProductFormControl("Name", "name", "", Validators.required),
            category: new ProductFormControl("Category", "category", "", Validators.compose([
                Validators.required,
                Validators.pattern("^[A-Za-z ]+$"),
                Validators.minLength(3),
                Validators.maxLength(10)
            ])),
            price: new ProductFormControl("Price", "price", "", Validators.compose([
                Validators.required,
                Validators.pattern("^[0-9\.]+$")
            ]))
        });
    }

    get productControls(): ProductFormControl[] {
        return Object.keys(this.controls)
            .map(k => this.controls[k] as ProductFormControl);
    }

    getFormValidationMessages(form: any): string[] {
        let messages: string[] = [];
        this.productControls.forEach(c => c.getValidationMessage()
            .forEach(m => messages.push(m)));
        return messages;
    }
}