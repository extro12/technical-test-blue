import { AfterContentInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})

export class ListPage implements AfterContentInit {
  constructor(private titleService: Title) {}
  ngAfterContentInit(): void {
  }

  ngOnInit() {
    this.titleService.setTitle(`Lista de personas`);
  }
}
