import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionLastTransactionsComponent } from './section-last-transactions.component';

describe('SectionLastTransactionsComponent', () => {
  let component: SectionLastTransactionsComponent;
  let fixture: ComponentFixture<SectionLastTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionLastTransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionLastTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
