import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JpHallComponent } from './jp-hall.component';

describe('JpHallComponent', () => {
  let component: JpHallComponent;
  let fixture: ComponentFixture<JpHallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JpHallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JpHallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
