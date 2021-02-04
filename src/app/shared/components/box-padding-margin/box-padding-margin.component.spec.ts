import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxPaddingMarginComponent } from './box-padding-margin.component';

describe('BoxPaddingMarginComponent', () => {
  let component: BoxPaddingMarginComponent;
  let fixture: ComponentFixture<BoxPaddingMarginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxPaddingMarginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxPaddingMarginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
