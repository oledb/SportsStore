import { ErrorHandler, Injectable } from "@angular/core";
import { MessageService } from "./message.service";
import { Message } from "./message.model";

@Injectable()
export class MessageErrorHandler implements ErrorHandler {
    constructor(private messageService: MessageService) {}

    handleError(error: any) {
        let msg = error instanceof Error ? error.message : error.toString();
        this.messageService
        .reportMessage(new Message(msg, true));
    }
}