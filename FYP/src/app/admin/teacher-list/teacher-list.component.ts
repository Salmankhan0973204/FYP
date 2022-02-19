import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})
export class TeacherListComponent implements OnInit {

  constructor(private httpclient:HttpClient) {}
  //public ELEMENT_DATA = [{}];
  public dataSource;
  public displayedColumns: string[] = [ 'Name', 'ID','Email','Specialization'];

  ngOnInit(): void {
    this.httpclient.get('http://localhost:8080/teacherList')
    .subscribe((res:any)=>{
      this.dataSource = res.data;
      console.log(this.dataSource);
    },
    (error)=>{
      console.log(error)
    })

  }
}
