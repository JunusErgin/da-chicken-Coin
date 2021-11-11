import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  public logs:BehaviorSubject<any> = new BehaviorSubject<any>([]);

  constructor() { }

  public log(node, msg){
    let currentLogs = this.logs.getValue();
    currentLogs.push({node: node, msg:msg, date: Date.now()});
    this.logs.next(currentLogs);
  }
}
