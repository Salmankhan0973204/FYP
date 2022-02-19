import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-add-labs',
  templateUrl: './add-labs.component.html',
  styleUrls: ['./add-labs.component.css']
})
export class AddLabsComponent implements OnInit {


  constructor(private service:AdminService, private _httpClient:HttpClient, private _snackBar:MatSnackBar, private router:ActivatedRoute) { }
  data;
  techers=[];
  isEdit: boolean = false;
  _id: string;
  Lab:FormGroup;
  ngOnInit(): void {
    this.Lab = new FormGroup({
      Day: new FormControl("Monday", Validators.required),
      LabNumber: new FormControl("1", Validators.required),
      TeacherName: new FormControl(""),
      Time: new FormControl("",Validators.required),
      Course: new FormControl("BSCS", Validators.required),
      Subject: new FormControl("", Validators.required),
      Semester: new FormControl("1", Validators.required),
      Section: new FormControl("A", Validators.required),
      TeacherID: new FormControl("", Validators.required),

    });
    this.router.queryParams.subscribe(res=>{
      console.log(res);
      if(res.section){
        this.isEdit = true;
        this._httpClient.post('http://localhost:8080/editLab', {id: res.section})
        .subscribe((_res:any)=>
        {
          console.log(_res);
          this._id = _res.data._id;
          this.Lab.patchValue(_res.data)
          console.log(this.Lab.value);
        })
      }
    })
    
    this._httpClient.get('http://localhost:8080/getteacherinfo')
    .subscribe((res:any)=>
    {
     this.techers = res.data;
      console.log(res.data);
    })
  
  }
  OnSubmit(){
    if(!this.isEdit){
    const teacherName = this.techers.filter(_teacher=> _teacher.ID === this.Lab.value.TeacherID);
    this.Lab.controls.TeacherName.setValue(teacherName[0].Name);
    this.service.PostLab(this.Lab.value)

  }
  else{  //updated
    const teacherName = this.techers.filter(_teacher=> _teacher.ID === this.Lab.value.TeacherID);
    this.Lab.controls.TeacherName.setValue(teacherName[0].Name);
    console.log(this._id);
    
    this._httpClient.post('http://localhost:8080/editLabSave', {_id:this._id, values:this.Lab.value })
      .subscribe((res:any)=>
      {
        this._snackBar.open('Lab Updated Successfully!',"ok");
      })
  }
}
}
