import { Component, Input } from '@angular/core';

import { StudentComponent } from './student/student.component'
import { GradeComponent } from './grade/grade.component'
import { AssignmentComponent } from './assignment/assignment.component'
import { KlassComponent } from './klass/klass.component'
import { MajorComponent } from './major/major.component'
import { InstructorComponent } from './instructor/instructor.component'
import { MajorClassComponent } from './majorclass/majorclass.component'
import { StudentClassComponent } from './studentclass/studentclass.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Input() erroMessage: string;
}
