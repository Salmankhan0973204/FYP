import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})
export class TimeTableComponent implements OnInit {

  constructor(private router:ActivatedRoute, private httpclient:HttpClient, private _route: Router) { }
  public ELEMENT_DATA = [{}];
  course;
  semester;
  data:[];
  isAdmin:boolean = false;
  public dataSourceA; 
  public dataSourceB;

  // student timetable View

  public displayedColumns: string[] = [ 'Day', 'Time','TeacherName','Subject' ,'Section','RoomNo'];

  // Admin timetable View

  ngOnInit(): void {
    if(localStorage.getItem('isAdmin')==='true'){
      this.isAdmin=true;
      this.displayedColumns = [ 'Day', 'Time','TeacherName','Subject' ,'Section','RoomNo',"actions"];
    }
    this.router.queryParams.subscribe(params=>{
      this.course = params.Course;
      this.semester= params.semester;
      this.httpclient.post('http://localhost:8080/timetablelist', {Course: this.course, Semester: this.semester}  )
         .subscribe((res:any)=>{
           this.data = res.data;
           this.sortOnDay();
           this.filterResult();

          },
         (error)=>{
           console.log(error)
         })
     })
   };

   Delete(element){
     this.httpclient.post('http://localhost:8080/timetablelist/delete', {_id: element._id}  )
      .subscribe((res:any)=>{
        this.ngOnInit(); 
      },
      (error)=>{
        console.log(error)
      })
   }

   Edit(element){
     this._route.navigate(["/admin/AddTimeTable"], {queryParams:{section: element._id}})
    
  }




   filterResult(){
    this.dataSourceA = this.data.filter((_data:any) => { return _data.Section == "A" && !_data.RoomNumber && !_data.LabNumber } )
    this.dataSourceB = this.data.filter((_data:any) =>{return _data.Section == "B" && !_data.RoomNumber && !_data.LabNumber})
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
  
};

 