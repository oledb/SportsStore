import { NgModule } from "@angular/core";
import { StaticDataSource } from "./static.datasource";
import { HttpModule } from "@angular/http";
import { Model } from "./repository.model";

@NgModule({
    providers: [Model, StaticDataSource]
})
export class ModelModule { }
