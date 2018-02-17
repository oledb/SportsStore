import { NgModule } from "@angular/core";
import { SimpleDataSource } from "./simple.datasource";
import { Model } from "./repository.model";

@NgModule({
    providers: [Model, SimpleDataSource]
})
export class ModelModule { }