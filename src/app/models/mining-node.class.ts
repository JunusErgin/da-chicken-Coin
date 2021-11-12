import { BlockchainService } from "../services/blockchain.service";
import { LoggingService } from "../services/logging.service";
import { Block } from "./block.class";

var ID_COUNTER = 0;

export class MiningNode {
    name = '';
    isMining = false;
    id = -1;
    loggingService: LoggingService;
    blockchainService: BlockchainService;
    currentBlock: Block; // Block den wir gerade minen

    constructor(name, loggingService, blockchainService) {
        this.name = name;
        this.id = ID_COUNTER;
        ID_COUNTER++;
        this.loggingService = loggingService;
        this.blockchainService = blockchainService;
    }

    toggle() {
        this.isMining = !this.isMining;

        if (this.isMining) {
            this.mine();
        } else {
            this.currentBlock.kill = true;
            console.log('Killing this.currentBlock', this.currentBlock);
            this.loggingService.log(`Node ${this.id}`, 'paused');
        }
    }

    async mine(){
        this.loggingService.log(`Node ${this.id}`, 'started');
        this.currentBlock = new Block(Date.now(), { from: 'BlockReward', to: this.name, amount: 5 });
        let blockchain = this.blockchainService.blockchain.getValue();
        await blockchain.addBlock(this.currentBlock, this.name);
        if(this.isMining) {
            await this.mine();
        }
    }
}