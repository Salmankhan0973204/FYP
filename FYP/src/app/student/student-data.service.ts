import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  constructor(private _httpClient:HttpClient, private snackBar: MatSnackBar) { }
  updateProfile(data){
    this._httpClient.post('http://localhost:8080/updatestudentdata',data)
    .subscribe((res:any)=>{
      console.log(res.message);
      this.snackBar.open("Profile Updated", "Ok");
    (error)=>{
      this.snackBar.open("Profile Updated Failed", "Ok");
      console.log("Registration Failed");
    }
    
  })
  }

  getProfile(){
    const Id= localStorage.getItem("userid")
    return this._httpClient.get('http://localhost:8080/getstudentdata/'+ Id );
  }
}