import { StudentDataService } from './student-data.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { SubjectComponent } from './subject/subject.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { RoomsComponent } from './rooms/rooms.component';
import { UCalenderComponent } from './ucalender/ucalender.component';

import { FacultyOfficeTimeComponent } from './faculty-office-time/faculty-office-time.component';
import { TeacherComponent } from './teacher/teacher.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatTableModule} from '@angular/material/table';
import { StudentprofileComponent } from './studentprofile/studentprofile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SemseterComponent } from './semseter/semseter.component';
import { CoursesComponent } from './courses/courses.component';
import { StudentListComponent } from './student-list/student-list.component';
import { LabListComponent } from './lab-list/lab-list.component';
import { LabComponent } from './lab/lab.component';
import { RoomListComponent } from './room-list/room-list.component';
import { TcourseComponent } from './tcourse/tcourse.component';
import { TsemesterComponent } from './tsemester/tsemester.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  declarations: [StudentComponent, SubjectComponent, TimeTableComponent, RoomsComponent, UCalenderComponent,  FacultyOfficeTimeComponent, TeacherComponent, DashboardComponent, StudentprofileComponent, SemseterComponent, CoursesComponent, StudentListComponent,  LabListComponent, LabComponent, RoomListComponent, TcourseComponent, TsemesterComponent,],
  imports: [
    CommonModule,
    StudentRoutingModule,  
    ReactiveFormsModule,
    MatTableModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatSnackBarModule

  ],
  providers:[ StudentDataService]
})
export class StudentModule { }
