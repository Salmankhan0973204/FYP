import { SubjectComponent } from './../student/subject/subject.component';
import { RoomsComponent } from './../student/rooms/rooms.component';
import { TsemesterComponent } from './../student/tsemester/tsemester.component';
import { TcourseComponent } from './../student/tcourse/tcourse.component';
import { CoursesComponent } from './../student/courses/courses.component';
import { RoomListComponent } from './../student/room-list/room-list.component';
import { TimeTableComponent } from './../student/time-table/time-table.component';
import { AddRoomsComponent } from './add-rooms/add-rooms.component';
import { AddUCalenderComponent } from './add-ucalender/add-ucalender.component';
import { AddTimeTableComponent } from './add-time-table/add-time-table.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { AddLabsComponent } from './add-labs/add-labs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';

import { SemsterComponent } from './semster/semster.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { LabComponent } from '../student/lab/lab.component';
import { LabListComponent } from '../student/lab-list/lab-list.component';
import { StudentListComponent } from '../student/student-list/student-list.component';
import { SemseterComponent } from '../student/semseter/semseter.component';
import { AdminLoginComponent } from '../auth/admin-login/admin-login.component';


const routes: Routes = [{ path: '', component: AdminComponent,  children: [

  {path:''  , component: DashboardComponent},
  {path:'AddLab' ,component:AddLabsComponent},
  {path:'AddSubject', component:AddSubjectComponent},
  {path:'AddTimeTable',component:AddTimeTableComponent},
  {path:'AddUCalender', component:AddUCalenderComponent},
  {path:'AddRoom' , component:AddRoomsComponent},
  {path:'TeacherList', component:TeacherListComponent},
  {path:'Lab/LabList', component:LabListComponent},
  {path:'RoomList', component:RoomListComponent},
  {path:'Courses', component:CoursesComponent},
  {path:'Courses/Semseter', component:SemseterComponent},
  {path:'Courses/Semseter/StudentList', component:StudentListComponent},
  {path:'Tcourse',component:TcourseComponent},
  {path:'Tcourse/Tsemester', component:TsemesterComponent},
  {path:'Tcourse/Tsemester/TimeTable', component:TimeTableComponent},
  {path:'Lab', component:LabComponent},
  {path:'Room', component:RoomsComponent},
  {path:'Room/RoomList', component:RoomListComponent},
  {path:'Subject' ,component:SubjectComponent}
  

 ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
