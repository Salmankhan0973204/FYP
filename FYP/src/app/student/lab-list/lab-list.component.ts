import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lab-list',
  templateUrl: './lab-list.component.html',
  styleUrls: ['./lab-list.component.css']
})
export class LabListComponent implements OnInit {

  constructor(private httpclient:HttpClient, private router: ActivatedRoute,private _route: Router) { }
  public ELEMENT_DATA = [{}];
  lab;
  isAdmin:boolean = false;
  public dataSource;
  data:[];
  public displayedColumns: string[] = [ 'Day', 'Time','TeacherName','Subject' , 'Course','Semester','Section'];

  ngOnInit(): void {
    if(localStorage.getItem('isAdmin')==='true'){
      this.isAdmin=true;
      this.displayedColumns = [ 'Day', 'Time','TeacherName','Subject' ,'Course','Semester','Section','actions'];
    }
    this.router.queryParams.subscribe(params=>{
      this.lab = params.LabNumber;

      this.httpclient.post('http://localhost:8080/lablist', {LabNumber: this.lab}  )
         .subscribe((res:any)=>{
          this.data = res.data;
          this.sortOnDay();
          this.dataSource=this.data
          
         },
         (error)=>{
           console.log(error)
         })
     })
   }
   Edit(element){
    this._route.navigate(["/admin/AddLab"], {queryParams:{section: element._id}})

 }


  Delete(element){
   console.log(element);
   this.httpclient.post('http://localhost:8080/lablist/delete', {_id: element._id}  )
    .subscribe((res:any)=>{
      this.ngOnInit();
    },
    (error)=>{
      console.log(error)
    })
 }

sortOnDay(){
  let temp=[];
  let _array: any =[];
  temp = this.data.filter((val:any) =>{ return val.Day == "Monday"});
  _array = _array.concat(temp)
  temp = this.data.filter((val:any) =>{ return val.Day == 'Tuesday'});
  _array = _array.concat(temp)
  temp = this.data.filter((val:any) =>{ return val.Day == 'Wednesday'});
  _array = _array.concat(temp)
  temp = this.data.filter((val:any) =>{ return val.Day == 'Thursday'});
  _array = _array.concat(temp)
  temp = this.data.filter((val:any) =>{ return val.Day == 'Friday'});
  _array = _array.concat(temp)
  temp = this.data.filter((val:any) =>{ return val.Day == 'Saturday'});
  _array = _array.concat(temp)
  this.data = _array;
}

}

