import { LoggingService } from "../services/logging.service";

var ID_COUNTER = 0;

export class MiningNode {
    name = '';
    isMining = false;
    id = -1;
    loggingService: LoggingService;

    constructor(name, loggingService) {
        this.name = name;
        this.id = ID_COUNTER;
        ID_COUNTER++;
        this.loggingService = loggingService;
    }

    toggle() {
        this.isMining = !this.isMining;

        if(this.isMining) {
            this.loggingService.log(`Node ${this.id}`, 'started');
        } else {
            this.loggingService.log(`Node ${this.id}`, 'paused');
        }
    }
}