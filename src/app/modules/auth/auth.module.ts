import { AdminModule } from './../admin/admin/admin.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ErrorPage2Component } from './error-page2/error-page2.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from './login/intersepter.service';



@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    AdminModule,
    CarouselModule.forRoot(),
    ReactiveFormsModule,
    
  ],
  declarations: [AuthRoutingModule.components, LoginComponent, ForgotPasswordComponent, RegisterComponent, ErrorPageComponent, ErrorPage2Component],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true },]
})
export class AuthModule { }