import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-section-log',
  templateUrl: './section-log.component.html',
  styleUrls: ['./section-log.component.scss']
})
export class SectionLogComponent implements OnInit {

  constructor(public ls: LoggingService) { }

  ngOnInit(): void {
    setInterval(() => {
      this.ls.log('Node 1', 'Block wurde gefunden');
    }, 5000);
  }

}
