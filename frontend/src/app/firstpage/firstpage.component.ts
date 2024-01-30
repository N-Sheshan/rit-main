import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html',
  styleUrls: ['./firstpage.component.css']
})
export class FirstpageComponent implements OnInit {
  load:string = '';
  constructor(private router: Router) { }

  ngOnInit(): void {  
  }

  redirectToOtherComponent(): void {
    this.router.navigate(['/other']); // Redirect to the 'OtherComponent'
  }
}
