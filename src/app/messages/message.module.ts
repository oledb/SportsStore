import { NgModule, ErrorHandler } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MessageComponent } from "./message.component";
import { MessageService } from "./message.service";
import { MessageErrorHandler } from "app/messages/errorHandler";

let errorHandlerProvider = {
    provide: ErrorHandler,
    useClass: MessageErrorHandler
};

@NgModule({
    imports: [BrowserModule],
    declarations: [MessageComponent],
    exports: [MessageComponent],
    providers: [MessageService, errorHandlerProvider]
})
export class MessageModule { }
