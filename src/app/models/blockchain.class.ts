import { Block } from "./block.class";

export class Blockchain {
    chain: Array<any>;

    constructor() {
        this.chain = [new Block(Date.now())];
    }

    getLastBlock() {
        return this.chain[this.chain.length - 1];
    }

    addBlock(block: Block) {
        block.previousHash = this.getLastBlock().hash;
        block.hash = block.getHash();
        this.chain.push(Object.freeze(block));
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