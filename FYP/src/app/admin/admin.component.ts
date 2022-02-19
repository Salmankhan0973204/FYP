import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit , OnDestroy {

  constructor() { }
  ngOnDestroy(): void {
    localStorage.removeItem('isAdmin');
  }

  ngOnInit(): void {
  }

}
