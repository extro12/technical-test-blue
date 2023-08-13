import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// importamos nuestro modelo Person
import { Person } from 'src/app/models/person';

@Injectable({
  providedIn: 'root'
})

export class PersonService {
  constructor(private http: HttpClient) {
  }
  registerPerson(person: Person) {
    return this.http.post("mock.mibluemedical.dev/api/people", person);
  }
}
