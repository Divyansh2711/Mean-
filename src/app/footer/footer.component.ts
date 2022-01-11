import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  alert=false;
  subscribeForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.subscribeForm=new FormGroup({
         'email':new FormControl("",[Validators.required,Validators.email])
    })
  }

  onSubscribe(){
    this.alert=true;
  }

  onalertclose(){
    this.alert=false;
    this.subscribeForm.reset();
  }

}
