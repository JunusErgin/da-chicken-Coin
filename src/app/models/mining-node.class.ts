import { BlockchainService } from "../services/blockchain.service";
import { LoggingService } from "../services/logging.service";
import { NotificationService } from "../services/notification.service";
import { Block } from "./block.class";

var ID_COUNTER = 0;

export class MiningNode {
    name = '';
    isMining = false;
    id = -1;
    loggingService: LoggingService;
    blockchainService: BlockchainService;
    currentBlock: Block; // Block den wir gerade minen
    notificationService: NotificationService;

    constructor(name, loggingService, blockchainService, notificationService) {
        this.name = name;
        this.id = ID_COUNTER;
        ID_COUNTER++;
        this.loggingService = loggingService;
        this.blockchainService = blockchainService;
        this.notificationService = notificationService;

        this.subscribeNotifications();
    }

    subscribeNotifications() {
        this.notificationService.notifications.pipe().subscribe((winner) => {
            if (winner) {
                if (winner.node != this.name) {
                    this.killCurrentBlock();
                }
                console.log(`[${this.name}] `, winner.node + ' hat gewonnen');
            }
        });
    }

    toggle() {
        this.isMining = !this.isMining;

        if (this.isMining) {
            this.loggingService.log(`Node ${this.id}`, 'started');
            this.mine();
        } else {
            this.killCurrentBlock();
            console.log('Killing this.currentBlock', this.currentBlock);
            this.loggingService.log(`Node ${this.id}`, 'paused');
        }
    }

    killCurrentBlock() {
        if (this.currentBlock) {
            this.currentBlock.kill = true;
        }
    }

    async mine() {
        this.currentBlock = new Block(Date.now(), { from: 'BlockReward', to: this.name, amount: 5 });
        let blockchain = this.blockchainService.blockchain.getValue();
        await blockchain.addBlock(this.currentBlock, this.name);
        if (this.isMining) {
            await this.mine();
        }
    }
}