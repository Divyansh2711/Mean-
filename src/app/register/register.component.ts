import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }

  genders=["Male","Female","Others"];

  registrationForm:FormGroup;

  alert=false;

  ngOnInit(): void {
    this.registrationForm=new FormGroup({
      'userName':new FormControl('',[Validators.required,Validators.minLength(5)]),
      'email':new FormControl('',[Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      'collegeName':new FormControl('',[Validators.required,Validators.minLength(10)]),
      'dob':new FormControl('',Validators.required),
      'gender':new FormControl('Male'),
      'mobile':new FormControl('',[Validators.required,Validators.pattern("[6789][0-9]{9}")]),
      'password':new FormControl('',[Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$")])
    })

    this.userService.getAlertStatus().subscribe(()=>{
      this.alert=true;
    })
  }

  onSubmit(){
    this.userService.addPost(this.registrationForm.value.userName,
      this.registrationForm.value.email,
      this.registrationForm.value.collegeName,
      this.registrationForm.value.dob,
      this.registrationForm.value.gender,
      this.registrationForm.value.mobile,
      this.registrationForm.value.password
      );

      console.log(this.registrationForm.value);
      this.registrationForm.reset();
  }

  onclose(){
    this.alert=false;
    this.router.navigate(['/register']);
  }


}
