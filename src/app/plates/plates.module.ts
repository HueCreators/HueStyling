import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "./navbar/navbar.component";
import {ErrorComponent} from "./error/error.component";
import { RegisterComponent } from './register/register.component';
import { IntentsComponent } from './intents/intents.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ErrorComponent,
    RegisterComponent,
    IntentsComponent,
    LoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PlatesModule { }
