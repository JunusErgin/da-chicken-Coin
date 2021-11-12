import { LoggingService } from "../services/logging.service";
import { NotificationService } from "../services/notification.service";
import { Block } from "./block.class";

const defaultMoneyTable = [
    { name: 'Manuel', amount: 0 },
    { name: 'Junus', amount: 0 },
    { name: 'Mihai', amount: 0 },
    { name: 'Anil', amount: 0 },
    { name: 'Linus', amount: 0 },
    { name: 'Steffi', amount: 0 },
];

export class Blockchain {
    chain: Array<any>;
    difficulty = 1; // Not higher than 5
    loggingService: LoggingService;
    notificationService: NotificationService;

    constructor(loggingService, notificationService) {
        this.loggingService = loggingService;
        this.notificationService = notificationService;
        this.chain = [new Block(Date.now(), { moneyTable: defaultMoneyTable })];
    }

    getLastBlock() {
        return this.chain[this.chain.length - 1];
    }

    async addBlock(block: Block, author?: string) {
        let lastMoneyTable = this.getLastBlock().data['moneyTable'];
        block.addMoneyTable(lastMoneyTable);
        block.previousHash = this.getLastBlock().hash;
        block.hash = block.getHash();
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