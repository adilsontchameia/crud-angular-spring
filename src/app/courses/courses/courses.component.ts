import { Component } from '@angular/core';
import { Course } from '../model/course';
import { CoursesService } from '../services/courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  //1 courses: Course[];
  courses$: Observable<Course[]>;
  displayedColumns = ['name', 'category'];


  constructor(private coursesService: CoursesService) {
    //1 this.courses = [];
    this.courses$ = this.coursesService.list();
  }

  ngOnInit(): void {

  }
}
