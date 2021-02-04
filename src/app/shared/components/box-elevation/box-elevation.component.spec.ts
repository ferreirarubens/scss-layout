import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxElevationComponent } from './box-elevation.component';

describe('BoxElevationComponent', () => {
  let component: BoxElevationComponent;
  let fixture: ComponentFixture<BoxElevationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxElevationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxElevationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
