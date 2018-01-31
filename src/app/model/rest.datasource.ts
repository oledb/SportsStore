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
    auth_token: string;

    constructor(private http: Http) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    getProducts(): Observable<Product[]> {
        return this.sendRequest(RequestMethod.Get, "products").map(response => response.json());
    }

    saveOrder(order: Order): Observable<Order> {
        return this.sendRequest(RequestMethod.Post, "orders", order).map(response => response.json());
    }

    authenticate(user: string, pass: string):Observable<boolean>{
        return this.http.request(new Request({
            method: RequestMethod.Post,
            url: this.baseUrl + "login",
            body: {name: user, password: pass }
        })).map(response => {
            let r = response.json();
            this.auth_token = r.success ?  r.token : null;
            return r.success;
        })
    }

    private sendRequest(verb: RequestMethod,
            url: string, body?: Product | Order,
            auth: boolean = false): Observable<Response> {
        let request = new Request({
            method: verb,
            url: this.baseUrl + url,
            body: body
        }) ;
        if (auth && this.auth_token != null){
            request.headers.set("Authorization", `Bearer<${this.auth_token}>`)
        }
        return this.http.request(request);
    }
}