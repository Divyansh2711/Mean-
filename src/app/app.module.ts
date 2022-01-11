import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './home/body/body.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { EventsComponent } from './events/events.component';
import { Day1Component } from './events/day1/day1.component';
import { Day2Component } from './events/day2/day2.component';
import {HttpClientModule} from '@angular/common/http';

const routes:Routes=[
  {path:"",component:HomeComponent},
  {path:"register",component:RegisterComponent},
  {path:"sponsors",component:SponsorsComponent},
  {path:"events",component:EventsComponent},
  {path:"day1",component:Day1Component},
  {path:"day2",component:Day2Component}
  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    HomeComponent,
    RegisterComponent,
    SponsorsComponent,
    EventsComponent,
    Day1Component,
    Day2Component
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
