import { Injectable, Inject, InjectionToken } from "@angular/core";
import { Http, Request, RequestMethod, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Product } from "./product.model";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

export const REST_URL = new InjectionToken("rest_url");

@Injectable()
export class RestDataSource {
    constructor(private http: Http,
    @Inject(REST_URL) private url: string) { }

    getData(): Observable<Product[]> {
        return this.sendRequest(RequestMethod.Get, this.url);
    }

    saveProduct(product: Product): Observable<Product> {
        return this.http.post(this.url, product)
            .map(r => r.json());
    }

    updateProduct(product: Product): Observable<Product> {
        return this.http.put(`${this.url}/${product.id}`, product)
            .map(r => r.json());
    }

    deleteProduct(id: number): Observable<Product> {
        return this.http.delete(`${this.url}/${id}`)
        .map(r => r.json());
    }

    private sendRequest(verb: RequestMethod,
        url: string, body?: Product) {
            return this.http.request(new Request({
                method: verb,
                url: url,
                body: body
            })).map(r => r.json())
                .catch((error: Response) => 
                    Observable.throw(`Get error in request: ${error.status}: ${error.statusText}`));
        }
}