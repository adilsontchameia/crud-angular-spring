import { Injectable } from '@angular/core';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  //Chamada asyncrona no servidor
  constructor(private httpClient: HttpClient) { }

  list(): Course[] {
    return [
      { _id: '1', name: 'Angular', category: 'front-end' },

      { _id: '2', name: 'Spring', category: 'back-end' }
    ];
  }
}
