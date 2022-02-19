import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { FauthService } from '../fauth.service';


@Component({
  selector: 'app-faculty-login',
  templateUrl: './faculty-login.component.html',
  styleUrls: ['./faculty-login.component.css']
})
export class FacultyLoginComponent implements OnInit {
  user:boolean=false
  password:boolean=false

  constructor( private service:FauthService, private _snackBar:MatSnackBar , private router:Router) { }

  Flogin: FormGroup;
  ngOnInit(): void {
  
  this.Flogin = new FormGroup({
    ID : new FormControl("", Validators.required),
    Password : new FormControl("", Validators.required)
  
  })
  }
  onSubmit(){
    this.user=false,
    this.password=false,

    this.service.LoginFaculty(this.Flogin.value)
    .subscribe(
      
      (res:any)=>{
      console.log(res)
      localStorage.setItem("id", res.data.ID)
      this._snackBar.open("Login Successfull", "Ok")
      this.router.navigate(['faculty/']);
    },
    (error)=>{ 
      console.log(error.error);
      if(error.error.message=="User Not Found")
      {
      this.user=true
      }

      if (error.error.message =="Incorrect Password")
      {
        this.password=true
      } 
    }
  )
}

}

      
    
  


