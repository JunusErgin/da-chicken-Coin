import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SectionBlocksComponent } from './section-blocks/section-blocks.component';
import { SectionCreateTransactionComponent } from './section-create-transaction/section-create-transaction.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { SectionLastTransactionsComponent } from './section-last-transactions/section-last-transactions.component';
import { SectionDataComponent } from './section-data/section-data.component';
import { NgChartsModule } from 'ng2-charts';
import { SectionLogComponent } from './section-log/section-log.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionBlocksComponent,
    SectionCreateTransactionComponent,
    SectionLastTransactionsComponent,
    SectionDataComponent,
    SectionLogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
