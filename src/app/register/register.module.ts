import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RegisterPageRoutingModule,
    NgOptimizedImage
  ],
  declarations: [RegisterPage]
})

export class RegisterPageModule {}
