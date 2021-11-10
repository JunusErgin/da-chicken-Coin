import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCreateTransactionComponent } from './section-create-transaction.component';

describe('SectionCreateTransactionComponent', () => {
  let component: SectionCreateTransactionComponent;
  let fixture: ComponentFixture<SectionCreateTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionCreateTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCreateTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
