import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-rooms',
  templateUrl: './add-rooms.component.html',
  styleUrls: ['./add-rooms.component.css']
})
export class AddRoomsComponent implements OnInit {

  constructor( private service:AdminService, 
               private _httpClient:HttpClient, 
               private router:ActivatedRoute,
               private _snackBar:MatSnackBar ) { }
               

RoomtimeTable:FormGroup;
isEdit: boolean = false;
_id: string;
  ngOnInit(): void {
    this.RoomtimeTable = new FormGroup({
      Day: new FormControl("Monday", Validators.required),
      RoomNumber: new FormControl("1", Validators.required),
      TeacherName: new FormControl("", Validators.required),
      Time: new FormControl("",Validators.required),
      Course: new FormControl("BSCS", Validators.required),
      Subject: new FormControl("Information Security", Validators.required),
      Semester: new FormControl("1", Validators.required),
      Section: new FormControl("A", Validators.required),

    });
  
  this.router.queryParams.subscribe(res=>{
    console.log(res);
    if(res.section){
      this.isEdit = true;
      this._httpClient.post('http://localhost:8080/editRoomTimetable',{id: res.section})
      .subscribe((_res:any)=>
      {
        
        this._id = _res.data._id;
        this.RoomtimeTable.patchValue(_res.data)
       
      })
    }
  })}
  OnSubmit(){
    if(!this.isEdit){
    this.service.PostRoomData(this.RoomtimeTable.value)
   }
   else{
    this._httpClient.post('http://localhost:8080/editRoomTimetableSave', {_id:this._id, values:this.RoomtimeTable.value })
    .subscribe((res:any)=>
    {
      this._snackBar.open('Room Updated Successfully!' ,"ok");
    })

   }}

}
