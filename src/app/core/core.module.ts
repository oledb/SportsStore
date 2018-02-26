import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { TableComponent } from "./table.component";
import { FormComponent } from "./form.component";
import { SharedState, SHARED_STATE } from "./sharedState.model";
import { Subject } from "rxjs/Subject";
import { MessageModule } from "../messages/message.module";
import { MessageService } from "../messages/message.service";
import { Message } from "../messages/message.model";
import { Model } from "../model/repository.model";
import { MODES } from "./sharedState.model";

const messageProvider = {
    provide: SHARED_STATE,
    deps: [ MessageService, Model ],
    useFactory: (messageService: MessageService, model: Model) => {
        const subject = new Subject<SharedState>();
        subject.subscribe(m => messageService.reportMessage(
            new Message(MODES[m.mode] + (m.id != null ?
            ` ${model.getProduct(m.id).name}` : "")))
        );
        return subject;
    }
}

@NgModule({
    imports: [ BrowserModule, FormsModule, ModelModule, MessageModule ],
    declarations: [ TableComponent, FormComponent ],
    exports: [ ModelModule, TableComponent, FormComponent ],
    providers: [ messageProvider ]
})
export class CoreModule { }
