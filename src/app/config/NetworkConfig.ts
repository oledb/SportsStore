import { HttpModule } from "@angular/http";

export class NetworkConfig {
    static get ProductUrl(): string {
        return `http://${location.hostname}:3500/products`;
    }
}