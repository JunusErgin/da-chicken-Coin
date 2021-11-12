import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Block } from '../models/block.class';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notifications = new BehaviorSubject(null);


  constructor() { }


  notifyAll(node, block: Block) {
    this.notifications.next({ node: node, block: block });
  }

  

  // blockReward(name) {
  //   let moneyTable = this.moneyTable.getValue();
  //   let row = moneyTable.find(r => r.name == name);
  //   row.amount += 5;
  //   this.moneyTable.next(moneyTable);
  // }  

  // updateMoney(name, amount) {
  //   let moneyTable = this.moneyTable.getValue();
  //   let row = moneyTable.find(r => r.name == name);
  //   row.amount = amount;
  //   this.moneyTable.next(moneyTable);
  // }
}
