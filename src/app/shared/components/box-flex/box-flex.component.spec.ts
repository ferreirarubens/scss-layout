import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxFlexComponent } from './box-flex.component';

describe('BoxFlexComponent', () => {
  let component: BoxFlexComponent;
  let fixture: ComponentFixture<BoxFlexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxFlexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxFlexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
