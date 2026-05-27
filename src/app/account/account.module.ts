import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AccountRoutingModule } from './account-routing.module';
import { AlertComponent } from '@app/_components';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { ForgotPasswordComponent } from './forgot-password.component';

@NgModule({
  declarations: [
    AlertComponent,           // standalone: false — declared here
    LoginComponent,           // standalone: false — declared here
    ForgotPasswordComponent   // standalone: false — declared here
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    AccountRoutingModule,
    RegisterComponent         // standalone: true — goes in imports
  ]
})
export class AccountModule { }