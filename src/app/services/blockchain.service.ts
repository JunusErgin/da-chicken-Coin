import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Block } from '../models/block.class';
import { Blockchain } from '../models/blockchain.class';
import { LoggingService } from './logging.service';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {
  public blockchain: BehaviorSubject<Blockchain> = new BehaviorSubject<Blockchain>(null);

  constructor(private ls: LoggingService, private ns: NotificationService) {
    this.createBlockchain();
  }

  createBlockchain() {
    this.blockchain.next(new Blockchain(this.ls, this.ns));
    this.ls.log('System', 'Neue Blockchain wurde erstellt.');
  }

  addTransaction(transaction) {
    let block = new Block(Date.now(), transaction);
    let blockChain = this.blockchain.getValue();
    console.log('Created new block', block);
    blockChain.addBlock(block);
  }
}