import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tsemester',
  templateUrl: './tsemester.component.html',
  styleUrls: ['./tsemester.component.css']
})
export class TsemesterComponent implements OnInit {
  public course: string;
  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params=>{
      this.course = params.Course;
   })
 }
  }


