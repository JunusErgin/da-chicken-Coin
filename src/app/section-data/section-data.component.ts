import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

var Chart;

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

  barChartData = [
    { data: [45, 37, 60, 70, 46, 33], label: 'Vermögen' }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    
  



  }



}

