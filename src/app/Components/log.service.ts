import { Injectable, InjectionToken } from "@angular/core";
export const LOG = new InjectionToken("logger");
export const SLOG = new InjectionToken("slogger");

export enum LogLevel {
    Debug, Info, Error
}

Injectable()
export class LogService {
    minimumLevel: LogLevel = LogLevel.Info;
    constructor(){
        
    }
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

Injectable()
export class SpecialLogService extends LogService {
    constructor() {
        super();
        this.minimumLevel = LogLevel.Debug;
    }

    logMessage(level: LogLevel, message: string) {
        if (level >= this.minimumLevel) {
            //console.log(`!--${LogLevel[level]}--! ${message}`);
        }
    }
}

export function CreateSpectial(): SpecialLogService {
    return new SpecialLogService();
}