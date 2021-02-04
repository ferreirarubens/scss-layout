import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxWidthHeightComponent } from './box-width-height.component';

describe('BoxWidthHeightComponent', () => {
  let component: BoxWidthHeightComponent;
  let fixture: ComponentFixture<BoxWidthHeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxWidthHeightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxWidthHeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
