import { NgModule } from "@angular/core";
import { NetworkConfig } from "../config/NetworkConfig";
import { HttpModule } from "@angular/http";
import { Model } from "./repository.model";
import { RestDataSource, REST_URL } from "./rest.datasource";

@NgModule({
    imports: [HttpModule],
    providers: [Model, RestDataSource,
    { provide: REST_URL, useValue: NetworkConfig.ProductUrl }]
})
export class ModelModule { }
