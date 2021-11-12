import * as shajs from 'sha.js';

var BLOCK_ID_COUNTER = 0;

export class Block {
    timestamp: number;
    data: any;
    previousHash = '';
    hash: string;
    nonce = 0;
    kill = false;
    id;

    constructor(timestamp: number, data?: any) {
        this.timestamp = timestamp || Date.now();
        this.data = data || {};
        this.previousHash = ''; 4
        this.hash = this.getHash();
        this.id = BLOCK_ID_COUNTER;
    }

    private resolveTransactions() {
        let transactions: any = this.data['transactions'] || [];
        transactions.forEach(t => this.resolveTransaction(t));
    }

    private resolveTransaction(transaction) {
        console.log('Resolving transaction', transaction);
        this.addMoney(transaction.to, transaction.amount);
    }

    private addMoney(name, amount) {
        let moneyTable = this.data.moneyTable;
        let entry = moneyTable.find(e => e.name == name);
        console.log('name, amount', name, amount);
        console.log('Updating moneyTable', moneyTable, entry);
        entry.amount += amount;
    }

    addMoneyTable(mt) {
        this.data['moneyTable'] = mt;
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
                } else if (this.hash.startsWith(Array(difficulty + 1).join('0'))) {
                    clearInterval(interval);
                    BLOCK_ID_COUNTER++;
                    this.resolveTransactions();
                    resolve(Date.now() - start);
                }
                this.nonce++;
                this.hash = this.getHash();
            }, 1000 / 30);
        });
    }

    mineFast(difficulty) {
        while (!this.hash.startsWith(Array(difficulty + 1).join('0'))) {
            this.nonce++;
            this.hash = this.getHash();
        }
    }
}