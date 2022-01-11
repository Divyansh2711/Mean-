import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  Day1:boolean=true;
  Day2:boolean=false;

  day1(){
    this.Day1=true;
    this.Day2=false;
  }
  day2(){
    this.Day1=false;
    this.Day2=true;
  }

}
