import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Blockchain } from '../models/blockchain.class';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {
  public blockchain: BehaviorSubject<Blockchain> = new BehaviorSubject<Blockchain>(null);

  constructor(private ls: LoggingService) {
    this.createBlockchain();
  }

  createBlockchain() {
    this.blockchain.next(new Blockchain());
    this.ls.log('System', 'Neue Blockchain wurde erstellt.');
  }
}
