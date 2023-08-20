import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  //Chamada asyncrona no servidor
  private readonly API = '/assets/courses.json'; //endpoint
  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API)
      //Forma de usar e transformar os dados
      .pipe(
        first(),
        delay(6000),
        tap(courses => console.log(courses))
      );
  }
}
