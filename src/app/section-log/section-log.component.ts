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
  }

}
