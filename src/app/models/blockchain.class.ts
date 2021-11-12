import { LoggingService } from "../services/logging.service";
import { NotificationService } from "../services/notification.service";
import { Block } from "./block.class";

export class Blockchain {
    chain: Array<any>;
    difficulty = 1; // Not higher than 5
    loggingService: LoggingService;
    notificationService: NotificationService;

    constructor(loggingService, notificationService) {
        this.loggingService = loggingService;
        this.notificationService = notificationService;
        this.chain = [new Block(Date.now())];
    }

    getLastBlock() {
        return this.chain[this.chain.length - 1];
    }

    async addBlock(block: Block, author?: string) {
        block.previousHash = this.getLastBlock().hash;
        block.hash = block.getHash();
        // this.loggingService.log(author || 'BCS', 'Mining block');
        try {
            let time = await block.mine(this.difficulty);
            this.notificationService.notifyAll(author, block);
            this.chain.push(Object.freeze(block));
            this.loggingService.log(author || 'BCS', `Block found after ${time}ms`);
        } catch (e) {

        }
    }


    isValid() {
        let valid = true;

        this.chain.forEach((block, i) => {
            const prevBlock = this.chain[i - 1];
            if (block.hash !== block.getHash() || prevBlock.hash !== block.prevHash) {
                valid = false;
            }
        });

        return valid;
    }
}