import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  sideNavStatus:boolean = false;
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    // this.auth.canAccess();
  }

}
