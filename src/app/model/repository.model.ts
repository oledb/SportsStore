import { Product } from './product.model';
import { SimpleDataSource } from './simple.datasource';
    

export class Model {
    private dataSource: SimpleDataSource;
    private products: Product[];
    private locator = (p:Product, id:number) => p.id == id;

    constructor() {
        this.dataSource = new SimpleDataSource();
        this.products = this.dataSource.getData();
    }
    private idCounter = 6;
    getProducts(): Product[] {
        return this.products;
    }

    getProduct(id: number): Product {
        return this.products.find(p => p.id === id);
    }

    deleteProduct(id: any): any {
        let index = this.products.findIndex(p => this.locator(p, id));
        if (index > -1) {
            this.products.splice(index, 1);
        }
    }

    addProduct(p: Product) {
        if (p.id !== 0) return;
        p.id = ++this.idCounter;
        this.dataSource.addProduct(p);
    }
}
