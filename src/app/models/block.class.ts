import * as shajs from 'sha.js';
export class Block {
    timestamp: number;
    data: any;
    previousHash = '';
    hash: string;
    nonce = 0;
    kill = false;

    constructor(timestamp: number, data?: any) {
        this.timestamp = timestamp || Date.now();
        this.data = data || {};
        this.previousHash = ''; 4
        this.hash = this.getHash();
    }

    getHash() {
        return shajs('sha256').update(this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce).digest('hex');
    }

    printData() {
        return JSON.stringify(this.data);
    }


    mine(difficulty) {
        let start = Date.now();
        return new Promise((resolve, reject) => {
            let interval = setInterval(() => {
                if (this.kill) {
                    clearInterval(interval);
                    reject('Killed after ' + (Date.now() - start));
                }else if (this.hash.startsWith(Array(difficulty + 1).join('0'))) {
                    clearInterval(interval);
                    resolve(Date.now() - start);
                }
                this.nonce++;
                this.hash = this.getHash();
            }, 100);
        });
    }

    mineFast(difficulty) {
        while (!this.hash.startsWith(Array(difficulty + 1).join('0'))) {
            this.nonce++;
            this.hash = this.getHash();
        }
    }
}