import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-add-time-table',
  templateUrl: './add-time-table.component.html',
  styleUrls: ['./add-time-table.component.css']
})
export class AddTimeTableComponent implements OnInit {

  constructor(private service:AdminService, private _httpClient:HttpClient, private router: ActivatedRoute, private _snackBar:MatSnackBar) { }
  data;
  techers=[];
  isEdit: boolean = false;
  _id: string;

  TimeTable:FormGroup;
  ngOnInit(): void {
    this.TimeTable = new FormGroup({
      Day: new FormControl("Monday", Validators.required),
      TeacherID: new FormControl("", Validators.required),
      TeacherName: new FormControl(""),
      Time: new FormControl("",Validators.required),
      Course: new FormControl("BSCS", Validators.required),
      Subject: new FormControl("Computer Graphics", Validators.required),
      Semester: new FormControl("1", Validators.required),
      Section: new FormControl("A", Validators.required),
      RoomNo: new FormControl("1", Validators.required),
    });

    //Edit timetable
    this.router.queryParams.subscribe(res=>{
      console.log(res);
      if(res.section){
        this.isEdit = true;
        this._httpClient.post('http://localhost:8080/edittimetable', {id: res.section})
        .subscribe((_res:any)=>
        {
          this._id = _res.data._id;
          this.TimeTable.patchValue(_res.data)
          console.log(this.TimeTable.value);
        })
      }
    })
    
    //get teacher data form database
    this._httpClient.get('http://localhost:8080/getteacherinfo')
    .subscribe((res:any)=>
    {
     this.techers = res.data;
    })
  }
  OnSubmit(){
    if(!this.isEdit){ //Submit
      const teacherName = this.techers.filter(_teacher=> _teacher.ID === this.TimeTable.value.TeacherID);
      this.TimeTable.controls.TeacherName.setValue(teacherName[0].Name);
      this.service.PostTimeTable(this.TimeTable.value);
    }
    
    else{  //updated save
        const teacherName = this.techers.filter(_teacher=> _teacher.ID === this.TimeTable.value.TeacherID);
        this.TimeTable.controls.TeacherName.setValue(teacherName[0].Name);

        
        this._httpClient.post('http://localhost:8080/edittimetableSave', {_id:this._id, values:this.TimeTable.value })
          .subscribe((res:any)=>
          {
            this._snackBar.open('TimeTable Updated Successfully!',"Ok");
          })
      }
}
}