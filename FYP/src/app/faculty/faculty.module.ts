import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FacultyRoutingModule } from './faculty-routing.module';
import { FacultyComponent } from './faculty.component';

import { FdashboardComponent } from './fdashboard/fdashboard.component';
import { FtimetableComponent } from './ftimetable/ftimetable.component';
import { FlabComponent } from './flab/flab.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [FacultyComponent,  FdashboardComponent, FtimetableComponent, FlabComponent,  ],
  imports: [
    CommonModule,
    FacultyRoutingModule,
    MatTableModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,

  ]
})
export class FacultyModule { }
