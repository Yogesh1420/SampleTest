import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RkHallComponent } from './rk-hall.component';

describe('RkHallComponent', () => {
  let component: RkHallComponent;
  let fixture: ComponentFixture<RkHallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RkHallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RkHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
