import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BlockchainService } from '../services/blockchain.service';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-section-data',
  templateUrl: './section-data.component.html',
  styleUrls: ['./section-data.component.scss']
})
export class SectionDataComponent implements OnInit, AfterViewInit {
  @ViewChild('myCanvas') myCanvas: ElementRef<HTMLCanvasElement>;

  barChartOptions = {
    responsive: true,
  };
  barChartLabels = [];
  barChartLegend = true;
  barChartPlugins = [];

  barChartData = [{
    data: [],
    label: 'Vermögen',
    backgroundColor: [
      '#ff6384',
      '#36a2eb',
      '#cc65fe',
      '#ffce56'
    ]
  }];

  constructor(private bs: BlockchainService) {
    this.subscribeData();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() { }

  subscribeData() {
    let blockchain = this.bs.blockchain.getValue();
    blockchain.latestBlock.subscribe(() => {
      let data = blockchain.getLastBlock().data;
      let moneyTable = data['moneyTable'];
      this.barChartLabels = moneyTable.map(r => r.name);
      this.barChartData[0].data = moneyTable.map(r => r.amount);
    });

  }
}
