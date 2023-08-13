import { AfterContentInit, Component, Inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { MatSnackBar } from '@angular/material/snack-bar';
import {Person} from "../models/person";
import {PersonService} from "../services/PersonService/PersonService.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements AfterContentInit {
  loadingSendData: boolean = false;
  form!: FormGroup;

  constructor(private titleService: Title, private fb:FormBuilder, private snackbar: MatSnackBar, private person: PersonService, private router: Router) {
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
    this.loadingSendData = true;
    if (this.form.invalid) {
      this.loadingSendData = false;
      return Object.values(this.form.controls).forEach(control => {
        control.markAsTouched();
      });
    }

    const person: Person = {
      name: this.form.get('name')?.value,
      last_name: this.form.get('lastname')?.value,
      address: this.form.get('address')?.value,
      email: this.form.get('email')?.value,
      age: this.form.get('age')?.value,
    }

    // consumimos EP de registro
    this.person.registerPerson(person).subscribe((response: any) => {
      this.snackbar.open('Registro exitoso', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: "bg-success-custom"
      });
      this.resetForm();
      // nos redirigimos a la lista de personas registradas luego de 3 segundos
      setTimeout(() => {
          this.router.navigate(['/registered-persons']);
      }, 3000);
    }, (error: any) => {
      this.snackbar.open('Error al registrar', 'Cerrar', {
          duration: 3000,
          panelClass: "bg-danger-custom",
          horizontalPosition: 'right',
          verticalPosition: 'top'
      });
    });

    this.loadingSendData = false;
  }

  resetForm() {
    this.form.reset();
  }

  // Validaciones
  nameValidation(input: string) {
    return this.form.get(input)?.invalid && this.form.get(input)?.touched;
  }
}
