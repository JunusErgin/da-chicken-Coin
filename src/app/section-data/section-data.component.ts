import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  barChartLabels = ['Manu', 'Junus', 'Markus', 'Linus', 'Anil', 'Mihai'];
  barChartLegend = true;
  barChartPlugins = [];

  barChartData = [];

  constructor(private ns: NotificationService) {
    this.subscribeData();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() { }

  subscribeData() {
    // this.ns.moneyTable.subscribe((mt) => {
    //   this.barChartLabels = mt.map(r => r.name);
    //   this.barChartData[0] = {
    //     data: [45, 37, 60, 70, 46, 33], label: 'Vermögen',
    //     backgroundColor: [
    //       '#ff6384',
    //       '#36a2eb',
    //       '#cc65fe',
    //       '#ffce56'
    //     ]
    //   };
    // });
  }


}

