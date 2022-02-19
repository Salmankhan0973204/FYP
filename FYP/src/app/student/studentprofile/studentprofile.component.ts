import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentDataService } from '../student-data.service';

@Component({
  selector: 'app-studentprofile',
  templateUrl: './studentprofile.component.html',
  styleUrls: ['./studentprofile.component.css']
})
export class StudentprofileComponent implements OnInit {
  studentProfile : FormGroup;
  file: File;
  preview:String = `assets\\imges\\icon.png`;
  
  constructor(private _service:StudentDataService) { }


  ngOnInit(): void {

    this._service.getProfile().subscribe((res:any)=>
    {
      this.studentProfile.patchValue(res.data);
      if(res.data.ProfilePic)
      {this.preview = res.data.ProfilePic}
      
    })


    this.studentProfile = new FormGroup({
      ID: new FormControl("", Validators.required),
      Email : new FormControl("", Validators.required),
      Name : new FormControl("", Validators.required),
      DOB: new FormControl("", Validators.required),
      Semseter: new FormControl("", Validators.required),
      Phone :  new FormControl("", Validators.required),
      CNIC : new FormControl("", Validators.required),
      Course: new FormControl("BSCS", Validators.required)
    })

    //this._service.getProfile(data);
  }
  uploadFile(event) {
    this.file = (event.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.preview = reader.result as string;
    }
    reader.readAsDataURL(this.file);
  }

    onSubmit(){
      var formData: any = new FormData();
      formData.append("ID", this.studentProfile.value.ID);
      formData.append("Email", this.studentProfile.value.Email);
      formData.append("Name", this.studentProfile.value.Name);
      formData.append("DOB", this.studentProfile.value.DOB);
      formData.append("Semseter", this.studentProfile.value.Semseter);
      formData.append("Phone", this.studentProfile.value.Phone);
      formData.append("CNIC", this.studentProfile.value.CNIC);
      formData.append("Course", this.studentProfile.value.Course)
      if(this.file){formData.append("image", this.file, this.file.name)}
      this._service.updateProfile(formData);
    
  }
  }

