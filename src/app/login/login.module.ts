import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginformComponent } from './loginform/loginform.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

import {
  MatButtonModule, MatCardModule,MatInputModule
} from '@angular/material';

@NgModule({
  declarations: [LoginformComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatButtonModule, 
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  ReactiveFormsModule
  ]
})
export class LoginModule { }
