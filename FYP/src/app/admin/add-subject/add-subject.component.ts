import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {
 

  constructor(private service:AdminService,
              private router:ActivatedRoute, 
              private _httpClient:HttpClient,
              private _snackBar:MatSnackBar) { }
  
  Subject : FormGroup;
  isEdit: boolean = false; // for admin
  _id: string;
  ngOnInit(): void {
    this.Subject= new FormGroup({
      Name: new FormControl("", Validators.required),
      ID: new FormControl("", Validators.required),
      CreditHours: new FormControl("", Validators.required),
      Course: new FormControl("BSCS",Validators.required )
    })
  
   //Edit timetable
   this.router.queryParams.subscribe(res=>{
    console.log(res);
    if(res.section){
      this.isEdit = true;
      this._httpClient.post('http://localhost:8080/editSubject', {id: res.section})
      .subscribe((_res:any)=>
      {
        this._id = _res.data._id; //for save and edit
        this.Subject.patchValue(_res.data)
        console.log(this.Subject.value);
      })
    }
  })}
  OnSubmit(){
    if(!this.isEdit){
    this.service.PostSubject(this.Subject.value)
  }
  else{ 
    this._httpClient.post('http://localhost:8080/editSubjectSave', {_id:this._id, values:this.Subject.value })
    .subscribe((res:any)=>
    {
      this._snackBar.open('Subject Updated Successfully!',"Ok");
    })
  }
  }}
