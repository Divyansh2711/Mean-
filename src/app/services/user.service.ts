import { Router } from '@angular/router';
import { User_Details } from './../models/user-details.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,private router:Router) { }

  private users:User_Details[]=[];
  private usersUpdated = new Subject<User_Details[]>();

  private alert_status=new Subject<boolean>();
  getAlertStatus(){
    return this.alert_status.asObservable();
  }

  addPost(name:string,email:string,collegeName:string,dob:Date,gender:string,
    mobile:string,password:string){
      const user:User_Details={id:'null',name:name,email:email,
        collegeName:collegeName,dob:dob,gender:gender,
      mobile_no:mobile,password:password};


       this.http.post<{message: string,user:User_Details }>("http://localhost:3000/register",user)
       .subscribe(data=>{

      this.users.push(user);
      this.usersUpdated.next([...this.users]);
      console.log(data.message);
      console.log(data.user.collegeName);
      
      this.alert_status.next(true);
       })
  }

  
}
