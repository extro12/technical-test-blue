import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { ListPageRoutingModule } from './list-routing.module';
import { ListPage } from './list.page';
import { RegisteredPersonsComponent } from '../components/RegisteredPersonsComponent/RegisteredPersonsComponent';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  imports: [
    CommonModule,
    ListPageRoutingModule,
    NgOptimizedImage,
    MatTableModule,
    MatPaginatorModule,
  ],
  declarations: [
    ListPage,
    RegisteredPersonsComponent
  ]
})

export class ListPageModule {}
