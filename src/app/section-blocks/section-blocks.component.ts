import { Component, OnInit } from '@angular/core';
import { BlockchainService } from '../services/blockchain.service';

@Component({
  selector: 'app-section-blocks',
  templateUrl: './section-blocks.component.html',
  styleUrls: ['./section-blocks.component.scss']
})
export class SectionBlocksComponent implements OnInit {

  constructor(public bcs: BlockchainService) { }

  ngOnInit(): void {
  }

}
