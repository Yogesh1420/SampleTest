import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SssHallComponent } from './sss-hall.component';

describe('SssHallComponent', () => {
  let component: SssHallComponent;
  let fixture: ComponentFixture<SssHallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SssHallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SssHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
