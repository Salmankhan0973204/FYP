import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private  _httpClient: HttpClient, private _snackBar:MatSnackBar) { }

//Sent Subject data
  PostSubject(data){
    this._httpClient.post('http://localhost:8080/subject', data)
    .subscribe((res:any)=>
      {
    
      this._snackBar.open('Subject Added Successfully!', "Ok");
    },
    (error)=>{
      console.log("ERROR")
      this._snackBar.open('Subject Added Failed', "Ok");
    })}

//Sent Lab data
PostLab(data){
  this._httpClient.post('http://localhost:8080/lab', data)
  .subscribe((res:any)=>{
    console.log(res);
    this._snackBar.open('Lab Added Successfully!',"Ok");
  },
  (error)=>{
    console.log("Error")
    this._snackBar.open('Lab Added Failed!',"Ok");
  }
  )}

//Sent RoomTimeTable
PostRoomData(data){
  this._httpClient.post('http://localhost:8080/room', data)
  .subscribe((res:any)=>{
    console.log(res);
    this._snackBar.open('Room TimeTable Added Successfully!',"Ok");
  },
  (error)=>{
    console.log("Error")
    this._snackBar.open('Room TimeTable Added Failed',"Ok");
  }
  
  )
}
//TimeTable

PostTimeTable(data){
  this._httpClient.post('http://localhost:8080/timetable',data)
  .subscribe((res:any)=>{
    console.log(res);
    this._snackBar.open('Time Table Added Successfully!',"Ok");
  },
  (error)=>{
    console.log("Error")
    this._snackBar.open('Time Table Added Failed!',"Ok");
  }
  )
}
}
