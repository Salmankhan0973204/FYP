import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {
  login: FormGroup;
  constructor(private service: AuthServiceService, private router:Router, private _snackBar: MatSnackBar) { }

  user:boolean=false   // incorrect  user
  password:boolean=false

  ngOnInit(): void {
    this.login = new FormGroup({
      ID : new FormControl("", Validators.required),
      Password : new FormControl("", Validators.required)
    })
  }

  // Form submission button
  onSubmit(){    
     this.user=false
     this.password=false
    this.service.LoginUser(this.login.value)
    .subscribe((res:any)=>{
      localStorage.setItem("userid", res.data.ID);
      console.log(localStorage.getItem("userid"));
      this._snackBar.open("Login Successfull", "Ok")
      this.router.navigate(['student/']);
    },
    (error)=>{ 
      console.log(error);
      if(error.error.message=="User Not Found")
      {
      this.user=true
      }

      if (error.error.message =="Incorrect Password")
      {
        this.password=true
      }
      
    })
  

  }}
