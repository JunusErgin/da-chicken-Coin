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
}
