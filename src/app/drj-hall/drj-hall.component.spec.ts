import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrjHallComponent } from './drj-hall.component';

describe('DrjHallComponent', () => {
  let component: DrjHallComponent;
  let fixture: ComponentFixture<DrjHallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrjHallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrjHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
