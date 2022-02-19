import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flab',
  templateUrl: './flab.component.html',
  styleUrls: ['./flab.component.css']
})
export class FlabComponent implements OnInit {

  constructor(private httpclient:HttpClient) { }
  public ELEMENT_DATA = [{}];
  public dataSource;
  public displayedColumns: string[] = [ 'Day', 'Time','Subject' , 'Course','Semester','Section', 'LabNumber'];

  TeacherID;
  data;
  
  ngOnInit(): void {
    
    this.TeacherID=localStorage.getItem("id")
    console.log(this.TeacherID)
    this.httpclient.post('http://localhost:8080/teacherid',{id:this.TeacherID})
    .subscribe((res:any)=>{
      const result = res.data;
      if(this.data = result.filter(data => { return !data.RoomNo} )){
      this.dataSource= this.data;}
 
         },
         (error)=>{
           console.log(error)
         })
  
   }};
 
  


