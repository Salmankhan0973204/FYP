import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService} from '../auth-service.service'
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-student-register',
  templateUrl: './student-register.component.html',
  styleUrls: ['./student-register.component.css']
})
export class StudentRegisterComponent implements OnInit {

  Register: FormGroup;
  constructor( private service:AuthServiceService, private _snackBar: MatSnackBar) { }
  ngOnInit(): void {
    this.Register = new FormGroup({
    Name : new FormControl("",Validators.required ),
    ID : new FormControl("",Validators.required),
    Password : new FormControl("",[Validators.required, Validators.minLength(3)]),
    Semester : new FormControl("", Validators.required),
    Course : new FormControl("BSCS",Validators.required)
  })
  }
  onSubmit(){
    this.service.RegisterUser(this.Register.value)
  
  }

}
