import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkmHallComponent } from './skm-hall.component';

describe('SkmHallComponent', () => {
  let component: SkmHallComponent;
  let fixture: ComponentFixture<SkmHallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkmHallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkmHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
