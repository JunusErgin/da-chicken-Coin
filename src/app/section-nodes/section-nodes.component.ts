import { Component, OnInit } from '@angular/core';
import { MiningNode } from '../models/mining-node.class';
import { NodeServiceService } from '../node-service.service';
import { BlockchainService } from '../services/blockchain.service';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-section-nodes',
  templateUrl: './section-nodes.component.html',
  styleUrls: ['./section-nodes.component.scss']
})
export class SectionNodesComponent implements OnInit {
  nodes = [];


  constructor(public ns: NodeServiceService, private ls: LoggingService, private bc: BlockchainService) {

   }

  ngOnInit(): void {
    this.initNodes();
  }

  initNodes(){
    this.nodes.push(new MiningNode('Junus', this.ls, this.bc));
    this.nodes.push(new MiningNode('Manuel', this.ls, this.bc));
  }

}
