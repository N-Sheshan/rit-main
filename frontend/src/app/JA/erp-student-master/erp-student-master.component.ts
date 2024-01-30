import { Component, OnInit } from '@angular/core';
import { MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-erp-student-master',
  templateUrl: './erp-student-master.component.html',
  styleUrls: ['./erp-student-master.component.css']
})
export class ErpStudentMasterComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  erp_student_master_data = {
    name: '',
    reg_no: '',
    reference_no: '',
    dept_code: 16,
    section: 'None',
    degree_code: 2,
    current_sem_no: null,
  };


  To_DB(): void {
    console.log(this.erp_student_master_data);

    this.http.post('http://172.16.71.2:9090/api/v1/JA/erp_student_master', this.erp_student_master_data)
      .subscribe(
        (response) => {

          alert('Data saved successfully...');
          // Handle success, show a success message, or perform any other action
        },
        (error) => {
          alert("This course is alrady exist");
          // Handle error, show an error message, or perform any other action
        }
      );
    this.erp_student_master_data = {
      name: '',
      reg_no: '',
      reference_no: '',
      dept_code: 16,
      section: 'None',
      degree_code: 2,
      current_sem_no: null,
    };
  }

  capitalizeInput() {
    this.erp_student_master_data.name = this.erp_student_master_data.name.toUpperCase();
  }

}
