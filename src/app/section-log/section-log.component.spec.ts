import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionLogComponent } from './section-log.component';

describe('SectionLogComponent', () => {
  let component: SectionLogComponent;
  let fixture: ComponentFixture<SectionLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
