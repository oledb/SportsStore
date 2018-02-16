import { Injectable } from "@angular/core";

export enum LogLevel {
    Debug, Info, Error
}

Injectable()
export class LogService {
    minimumLevel: LogLevel = LogLevel.Info;

    logInfoMessage(message: string) {
        this.logMessage(LogLevel.Info, message);
    }

    logDebugMessage(message: string) {
        this.logMessage(LogLevel.Debug, message);
    }

    logErrorMessage(message: string) {
        this.logMessage(LogLevel.Error, message);
    }

    logMessage(level: LogLevel, message: string) {
        if (level >= this.minimumLevel) {
            console.log(`[${LogLevel[level]}] - ${message}`);
        }
    }
}