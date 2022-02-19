import { SsComponent } from './../ss/ss.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FacultyLoginComponent } from './faculty-login/faculty-login.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth.component';
import { FacultyRegisterComponent } from './faculty-register/faculty-register.component';

const routes: Routes = [
  { path: '', component: AuthComponent ,
   children: [
    {path:'tt' ,  component: StudentLoginComponent},
    {path:'facultyLogin' , component:FacultyLoginComponent} ,
    {path: 'adminlogin', component:AdminLoginComponent},
    {path:'studentRegister' , component: StudentRegisterComponent},
    {path:'facultyLogin/fff' , component:FacultyRegisterComponent},
 ] 
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
