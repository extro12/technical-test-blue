import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RegisterPageRoutingModule,
    NgOptimizedImage,
    MatProgressBarModule
  ],
  declarations: [RegisterPage]
})

export class RegisterPageModule {}
