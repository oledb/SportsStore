import { NgModule } from '@angular/core';
import { ProductRepository } from './static.repository';
import { StaticDataSource } from './static.datasource';
import { Cart } from './cart.model';
import { Order } from './order.module';
import { OrderRepository } from './order.repository';
import { RestDataSource } from './rest.datasource';
import { HttpModule } from '@angular/http';
import { AuthService } from './auth.service';

@NgModule({
    imports: [HttpModule],
    providers: [ ProductRepository,  Cart, Order, OrderRepository,
    { provide: StaticDataSource, useClass: RestDataSource }, RestDataSource, AuthService ]
})
export class ModelModule { }