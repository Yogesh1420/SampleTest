import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AkmHallComponent } from './akm-hall.component';

describe('AkmHallComponent', () => {
  let component: AkmHallComponent;
  let fixture: ComponentFixture<AkmHallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AkmHallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AkmHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
