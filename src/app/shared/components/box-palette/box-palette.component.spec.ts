import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxPaletteComponent } from './box-palette.component';

describe('BoxPaletteComponent', () => {
  let component: BoxPaletteComponent;
  let fixture: ComponentFixture<BoxPaletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxPaletteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
