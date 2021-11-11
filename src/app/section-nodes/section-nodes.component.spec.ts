import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionNodesComponent } from './section-nodes.component';

describe('SectionNodesComponent', () => {
  let component: SectionNodesComponent;
  let fixture: ComponentFixture<SectionNodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionNodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionNodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
