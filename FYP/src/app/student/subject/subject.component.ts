import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  constructor(private httpclient:HttpClient , private _route:Router) {}
 // public ELEMENT_DATA = [{}];
  public dataSource;
  isAdmin:boolean = false;
  public displayedColumns: string[] = [ 'Name', 'ID','CreditHours', 'Course'];

  ngOnInit(): void {
    if(localStorage.getItem('isAdmin')==='true'){
      this.isAdmin=true;
      this.displayedColumns = ['Name','ID','CreditHours','Course',"actions"];
    }
    this.httpclient.get('http://localhost:8080/getsubjects')
    .subscribe((res:any)=>{
      this.dataSource = res.data;
      console.log(this.dataSource);
    },
    (error)=>{
      console.log(error)
    })

  }
  Delete(element){
    this.httpclient.post('http://localhost:8080/Subjectdelete', {_id: element._id}  )
     .subscribe((res:any)=>{
       this.ngOnInit(); 
     },
     (error)=>{
       console.log(error)
     })
  }

  Edit(element){
    this._route.navigate(["/admin/AddSubject"], {queryParams:{section: element._id}})
   
 }

}
