import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-semseter',
  templateUrl: './semseter.component.html',
  styleUrls: ['./semseter.component.css']
})
export class SemseterComponent implements OnInit {
  public course: string;
  constructor(private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params=>{
     this.course = params.D;
  })
}
}
