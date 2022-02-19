import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {



  constructor(private router: Router) { }
  
  
    admin: FormGroup;
  ngOnInit(): void {
    this.admin = new FormGroup({
      ID : new FormControl("", Validators.required),
      Password : new FormControl("", Validators.required)
    })
  }
  onSubmit(){
    if(this.admin.value.ID=='admin' && this.admin.value.Password == '123'){
      localStorage.setItem("isAdmin", 'true');
      this.router.navigate(['/admin']);
    }
  }
}
