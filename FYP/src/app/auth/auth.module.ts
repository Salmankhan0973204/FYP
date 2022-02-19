import { FauthService } from './fauth.service';
import { AuthServiceService } from './auth-service.service';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FacultyLoginComponent } from './faculty-login/faculty-login.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { HttpClientModule } from '@angular/common/http';
import { FacultyRegisterComponent } from './faculty-register/faculty-register.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SsComponent } from './ss/ss.component';


@NgModule({
  declarations: [AuthComponent, AdminLoginComponent, FacultyLoginComponent, StudentLoginComponent, StudentRegisterComponent, FacultyRegisterComponent, SsComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers:[AuthServiceService,FauthService]
})
export class AuthModule { }
