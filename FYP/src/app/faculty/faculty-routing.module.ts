import { RoomListComponent } from './../student/room-list/room-list.component';
import { RoomsComponent } from './../student/rooms/rooms.component';
import { FlabComponent } from './flab/flab.component';
import { FtimetableComponent } from './ftimetable/ftimetable.component';
import { FdashboardComponent } from './fdashboard/fdashboard.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacultyComponent } from './faculty.component';

const routes: Routes = [{ path: '', component: FacultyComponent ,children: [
  {path:''  , component:FdashboardComponent},
  {path:'Ftimetable', component:FtimetableComponent},
  {path:'Room', component: RoomsComponent},   
  {path:'Flab', component: FlabComponent},
  {path:'Room/RoomList', component:RoomListComponent}
 
  
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacultyRoutingModule { }
