import { Component, OnInit } from '@angular/core';
import { Block } from '../models/block.class';
import { BlockchainService } from '../services/blockchain.service';

@Component({
  selector: 'app-section-create-transaction',
  templateUrl: './section-create-transaction.component.html',
  styleUrls: ['./section-create-transaction.component.scss']
})
export class SectionCreateTransactionComponent implements OnInit {
  users = ['Manuel', 'Junus', 'Mihai', 'Anil', 'Markus', 'Linus'];
  from = 'Manuel';
  to = 'Junus';
  amount = 0;


  constructor(private blockchainService: BlockchainService) { }

  ngOnInit(): void {
    
  }

  addTransaction(){
    console.log('Adding transaction', this.from, this.to);
    let transaction = { from: this.from, to: this.to, amount: this.amount };
    this.blockchainService.addTransaction(transaction);
  }

}
