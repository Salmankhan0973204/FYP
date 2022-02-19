import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  
  constructor(private httpclient:HttpClient, private router: ActivatedRoute) { }
  public ELEMENT_DATA = [{}];
  course;
  semester;
  public dataSource;
  public displayedColumns: string[] = [ 'Name', 'ID','Course','Semseter'];
    
  ngOnInit(): void {
    this.router.queryParams.subscribe(params=>{
     this.course = params.Course;
     this.semester= params.semester;
     this.httpclient.post('http://localhost:8080/poststudentList', {Course: this.course, Semseter: this.semester}  )
        .subscribe((res:any)=>{
          this.dataSource= res.data;
          console.log(this.dataSource);

        },
        (error)=>{
          console.log(error)
        })
    })
  }};



 




  
