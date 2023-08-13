import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Person } from "../../models/person";
import { PersonService } from "../../services/PersonService/PersonService.service";

@Component({
  selector: 'app-registered-persons',
  templateUrl: './RegisteredPersonsComponent.html',
  styleUrls: ['./RegisteredPersonsComponent.scss']
})

export class RegisteredPersonsComponent implements AfterViewInit {
  displayedColumns: string[] = ['name', 'last_name', 'email', 'age', 'address'];
  dataSource = new MatTableDataSource<Person>([]);
  totalPersons: number = 0;
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  constructor(private personService: PersonService) {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    //obtenemos nuestro listado de personas para nuestro datasource
    this.personService.getRegisteredPersons().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource<Person>(data.people);
      this.totalPersons = data.people.length;
      this.dataSource.paginator = this.paginator as MatPaginator;
    });
  }
}
