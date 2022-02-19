import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUCalenderComponent } from './add-ucalender.component';

describe('AddUCalenderComponent', () => {
  let component: AddUCalenderComponent;
  let fixture: ComponentFixture<AddUCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUCalenderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
