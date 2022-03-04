import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DkHallComponent } from './dk-hall.component';

describe('DkHallComponent', () => {
  let component: DkHallComponent;
  let fixture: ComponentFixture<DkHallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DkHallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DkHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
