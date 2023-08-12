import { AfterContentInit, Component, Inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements AfterContentInit {

    constructor(private titleService: Title) { }

    ngAfterContentInit(): void {
    }

    ngOnInit() {
      this.titleService.setTitle(`Formulario de registro`);
    }
}
