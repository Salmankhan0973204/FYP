import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { AddTimeTableComponent } from './add-time-table/add-time-table.component';
import { AddLabsComponent } from './add-labs/add-labs.component';
import { AddRoomsComponent } from './add-rooms/add-rooms.component';
import { AddUCalenderComponent } from './add-ucalender/add-ucalender.component';
import { SemsterComponent } from './semster/semster.component';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AdminService } from './admin.service';


@NgModule({
  declarations: [AdminComponent, DashboardComponent, AddSubjectComponent,  AddTimeTableComponent, AddLabsComponent, AddRoomsComponent, AddUCalenderComponent, SemsterComponent,  TeacherListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers:[AdminService]
})
export class AdminModule { }
