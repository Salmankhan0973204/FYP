import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UCalenderComponent } from './ucalender.component';

describe('UCalenderComponent', () => {
  let component: UCalenderComponent;
  let fixture: ComponentFixture<UCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UCalenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
