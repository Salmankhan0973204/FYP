import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  constructor(private httpclient:HttpClient, private router:ActivatedRoute, private _route:Router) { } 
  public ELEMENT_DATA = [{}];
  Room;
  data:[];
  isAdmin:boolean = false;
  public dataSourceA;
  public dataSourceB;
  public displayedColumns: string[] = [ 'Day', 'Time','TeacherName','Subject' , 'Course','Semester','Section'];

  ngOnInit(): void {

    if(localStorage.getItem('isAdmin')==='true'){
      this.isAdmin=true;
      this.displayedColumns = [ 'Day', 'Time','TeacherName','Subject' ,'Course','Semester','Section','actions'];
    }
    this.router.queryParams.subscribe(params=>{
      this.Room = params.RoomNumber;
      
      this.httpclient.post('http://localhost:8080/roomlist', {RoomNumber: this.Room}  )
         .subscribe((res:any)=>{
           this.data= res.data;
          this.sortOnDay();
          this.filterResult()

         

         },
         (error)=>{
           console.log(error)
         })
     })
     
   }
   Edit(element){
    this._route.navigate(["/admin/AddRoom"], {queryParams:{section: element._id}})
   }
   Delete(element){
    console.log(element);
    this.httpclient.post('http://localhost:8080/roomlist/delete', {_id: element._id}  )
     .subscribe((res:any)=>{
       this.ngOnInit();
     },
     (error)=>{
       console.log(error)
     })
  }

  
  filterResult(){
    this.dataSourceA = this.data.filter((_data:any) => { return _data.Section == "A"  } )
    this.dataSourceB = this.data.filter((_data:any) =>{return _data.Section == "B" })
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
  console.log(_array);
  this.data = _array;
}

}
 


 