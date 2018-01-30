import { Injectable } from '@angular/core';
import { Http, Request, RequestMethod, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Product } from './Product';
import { Cart } from './cart.model';
import { Order } from './order.module';
import "rxjs/add/operator/map";

const PROTOCOL = "http";
const PORT = 3501;

@Injectable()
export class RestDataSource {
    baseUrl: string;
    object: Observable<Product | Order >;
    constructor(private http: Http) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    getProducts(): Observable<Product[]> {
        return this.sendRequest(RequestMethod.Get, "products").map(response => response.json());
    }

    saveOrder(order: Order): Observable<Order> {
        return this.sendRequest(RequestMethod.Post, "orders", order).map(response => response.json());
    }

    private sendRequest(verb: RequestMethod,
            url: string, body?: Product | Order): Observable<Response> {
        return this.http.request(new Request({
            method: verb,
            url: this.baseUrl + url,
            body: body
        }));
    }
}