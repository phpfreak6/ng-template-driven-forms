import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

    categories = [
        {
            id: 1,
            name: 'Development',
        },
        {
            id: 2,
            name: 'Arts',
        },
        {
            id: 3,
            name: 'Languages',
        }
    ];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit( courseObj :Object ) {
    console.log('courseObj', courseObj);
  }

}
