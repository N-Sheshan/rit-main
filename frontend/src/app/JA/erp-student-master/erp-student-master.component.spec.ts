import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErpStudentMasterComponent } from './erp-student-master.component';

describe('ErpStudentMasterComponent', () => {
  let component: ErpStudentMasterComponent;
  let fixture: ComponentFixture<ErpStudentMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErpStudentMasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErpStudentMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
