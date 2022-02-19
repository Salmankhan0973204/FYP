import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyOfficeTimeComponent } from './faculty-office-time.component';

describe('FacultyOfficeTimeComponent', () => {
  let component: FacultyOfficeTimeComponent;
  let fixture: ComponentFixture<FacultyOfficeTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyOfficeTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyOfficeTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
