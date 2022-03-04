import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GhHallComponent } from './gh-hall.component';

describe('GhHallComponent', () => {
  let component: GhHallComponent;
  let fixture: ComponentFixture<GhHallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GhHallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GhHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
