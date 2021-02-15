import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyseItemComponent } from './analyse-item.component';

describe('AnalyseItemComponent', () => {
  let component: AnalyseItemComponent;
  let fixture: ComponentFixture<AnalyseItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalyseItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
