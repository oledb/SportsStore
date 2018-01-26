import { NgModule } from '@angular/core';
import { ProductRepository } from './static.repository';
import { StaticDataSource } from './static.datasource';

@NgModule({
    providers: [ ProductRepository, StaticDataSource ]
})
export class ModelModule{}