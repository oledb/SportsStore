import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ModelModule } from "./model/model.module";
import { CoreModule } from "./core/core.module";
import { TableComponent } from "./core/table.component";
import { FormComponent } from "./core/form.component";
import { MessageModule } from "./messages/message.module";
import { MessageComponent } from "./messages/message.component";
import { RouterModule } from "@angular/router";
import { routing } from "./app.routing";
import { AppComponent } from "./app.component";

@NgModule({
    imports: [BrowserModule, ModelModule, CoreModule, MessageModule, RouterModule, routing ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
