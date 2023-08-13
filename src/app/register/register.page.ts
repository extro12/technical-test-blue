import { AfterContentInit, Component, Inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements AfterContentInit {

  form!: FormGroup;
  messageValidation = {
    name: 'El nombre es requerido',
    lastname: 'El apellido es requerido',
    email: 'El email es requerido',
    age: 'La edad es requerida',
  }

  constructor(private titleService: Title, private fb:FormBuilder) {
    this.createForm();
  }

  ngAfterContentInit(): void {
  }

  ngOnInit() {
    this.titleService.setTitle(`Formulario de registro`);
  }

  createForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      address: [''],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18)]],
    });
  }

  submitForm() {
    console.log(this.form);
    if (this.form.invalid) {
      return Object.values(this.form.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

  resetForm() {
    this.form.reset();
  }

  // Validaciones
  nameValidation(input: string) {
    return this.form.get(input)?.invalid && this.form.get(input)?.touched;
  }
}
