import * as shajs from 'sha.js';
export class Block {
    timestamp: number;
    data: any;
    previousHash = '';
    hash:string;

    constructor(timestamp:number, data?:any) {
        this.timestamp = timestamp || Date.now();
        this.data = data || {};
        this.previousHash = '';4
        this.hash = this.getHash();
    }

    getHash() {
        return shajs('sha256').update(this.previousHash + this.timestamp + JSON.stringify(this.data)).digest('hex');
    }
}