import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import {InputTextModule} from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {PasswordModule} from 'primeng/password';
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    PasswordModule
  ]
})
export class LoginModule { }
