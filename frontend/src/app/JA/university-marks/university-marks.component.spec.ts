import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversityMarksComponent } from './university-marks.component';

describe('UniversityMarksComponent', () => {
  let component: UniversityMarksComponent;
  let fixture: ComponentFixture<UniversityMarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversityMarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversityMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
