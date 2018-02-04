import { Product } from './product.model';
import { SimpleDataSource } from './simple.datasource';

export class Model {
    private dataSource: SimpleDataSource;

    constructor() {
        this.dataSource = new SimpleDataSource();
    }

    getProducts(): Product[] {
        return this.dataSource.getData();
    }
}
