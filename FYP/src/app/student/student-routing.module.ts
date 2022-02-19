import { TcourseComponent } from './tcourse/tcourse.component';
import { TsemesterComponent } from './tsemester/tsemester.component';
import { RoomListComponent } from './room-list/room-list.component';


import { FacultyOfficeTimeComponent } from './faculty-office-time/faculty-office-time.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { UCalenderComponent } from './ucalender/ucalender.component';
import { RoomsComponent } from './rooms/rooms.component';
import { TeacherComponent } from './teacher/teacher.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SubjectComponent } from './subject/subject.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudentComponent } from './student.component';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';
import { CoursesComponent } from '../student/courses/courses.component';
import { SemseterComponent } from './semseter/semseter.component';
import { StudentListComponent } from '../student/student-list/student-list.component';
import { LabListComponent } from './lab-list/lab-list.component';
import { LabComponent } from './lab/lab.component';
import { TeacherListComponent } from '../admin/teacher-list/teacher-list.component';



const routes: Routes = [
  { path: '', component: StudentComponent ,
   children: [
    {path:'',component:DashboardComponent},
    {path:'Subject' ,  component: SubjectComponent},
    {path:'Teacher', component:TeacherComponent},
    {path:'Room', component:RoomsComponent},
    {path:'Room/RoomList', component:RoomListComponent},
    {path:'UCalender', component:UCalenderComponent},
    {path:'Tcourse/Tsemester/TimeTable', component:TimeTableComponent},
    {path:'FaculyOfficeTime', component:FacultyOfficeTimeComponent},
    {path:'profile', component:StudentprofileComponent},
    {path:'Courses', component:CoursesComponent},
    {path:'Courses/Semseter', component:SemseterComponent},
    {path:'Courses/Semseter/StudentList', component:StudentListComponent},
    {path:'Lab/LabList', component:LabListComponent},
    {path:'Lab', component:LabComponent},
    {path:'Tcourse/Tsemester', component:TsemesterComponent},
    {path:'Tcourse' , component:TcourseComponent},
    {path:'TeacherList', component:TeacherListComponent},
    
    


]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
