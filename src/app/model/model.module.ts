import { NgModule } from '@angular/core';
import { ProductRepository } from './static.repository';
import { StaticDataSource } from './static.datasource';
import { Cart } from './cart.model';

@NgModule({
    providers: [ ProductRepository, StaticDataSource, Cart ]
})
export class ModelModule{}