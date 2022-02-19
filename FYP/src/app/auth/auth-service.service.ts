import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor( private _httpClient: HttpClient,private _Router:Router, private _snackBar:MatSnackBar ) { }
  
  //sending student register data
  RegisterUser(data){
    localStorage.removeItem('isAdmin');//no admin view
    this._httpClient.post('http://localhost:8080/studentRegister', data)
    .subscribe((res:any)=>{
     this._snackBar.open('User registered Successfully!');
    },
    (error)=>{
       this._snackBar.open('User registeration Failed!');
    })
  }

  // Sending Student Login data
  LoginUser(data){
    localStorage.removeItem('isAdmin'); //no admin view
    return this._httpClient.post('http://localhost:8080/studentLogin', data);
  
    
  }
  
}
