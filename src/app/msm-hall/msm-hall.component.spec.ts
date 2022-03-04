import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsmHallComponent } from './msm-hall.component';

describe('MsmHallComponent', () => {
  let component: MsmHallComponent;
  let fixture: ComponentFixture<MsmHallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsmHallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsmHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
