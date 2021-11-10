import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-create-transaction',
  templateUrl: './section-create-transaction.component.html',
  styleUrls: ['./section-create-transaction.component.scss']
})
export class SectionCreateTransactionComponent implements OnInit {
  users = ['Manuel', 'Junus', 'Mihai', 'Anil', 'Markus', 'Linus'];
  constructor() { }

  ngOnInit(): void {
  }

}
