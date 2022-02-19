import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FauthService {

  constructor(private  _httpClient: HttpClient , private _snackBar:MatSnackBar) { }

  //Faculty Registration
  RegisterFaculty(data){
    localStorage.removeItem('isAdmin');
    this._httpClient.post('http://localhost:8080/FacultyRegister', data)
    .subscribe((res:any)=>{
      console.log(res.message);
      this._snackBar.open('User registered Successfully!');
    },
  (error)=>{console.log("Registration Failed");
  this._snackBar.open('User registered Successfully!');}
  
    )
  }

  //Faculty Login
  LoginFaculty(data){
  localStorage.removeItem('isAdmin');
  return  this._httpClient.post('http://localhost:8080/FacultyLogin',data)
  
  }


}

