import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBlocksComponent } from './section-blocks.component';

describe('SectionBlocksComponent', () => {
  let component: SectionBlocksComponent;
  let fixture: ComponentFixture<SectionBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionBlocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
