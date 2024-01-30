import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentTenthMarkComponent } from './student-tenth-mark.component';

describe('StudentTenthMarkComponent', () => {
  let component: StudentTenthMarkComponent;
  let fixture: ComponentFixture<StudentTenthMarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentTenthMarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentTenthMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
