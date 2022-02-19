import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FauthService } from '../fauth.service';

@Component({
  selector: 'app-faculty-register',
  templateUrl: './faculty-register.component.html',
  styleUrls: ['./faculty-register.component.css']
})
export class FacultyRegisterComponent implements OnInit {
  FRegister:FormGroup;

  constructor(private service:FauthService) { }

  ngOnInit(): void {
    this.FRegister= new FormGroup({
      Name: new FormControl(),
      ID:new FormControl(),
      Email: new FormControl(),
      Password: new FormControl(),
      Specialization: new FormControl()
    })
  }
  onSubmit(){ this.service.RegisterFaculty(this.FRegister.value)}
}
