import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SgHallComponent } from './sg-hall.component';

describe('SgHallComponent', () => {
  let component: SgHallComponent;
  let fixture: ComponentFixture<SgHallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SgHallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SgHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
