import { Product } from './product.model';
import { SimpleDataSource } from './simple.datasource';
    

export class Model {
    private dataSource: SimpleDataSource;
    private products: Product[];

    constructor() {
        this.dataSource = new SimpleDataSource();
        this.products = this.dataSource.getData();
    }

    getProducts(): Product[] {
        return this.products;
    }

    getProduct(id: number): Product {
        return this.products.find(p => p.id === id);
    }

    deleteProduct(arg0: any): any {
        throw new Error("Method not implemented.");
    }
}
