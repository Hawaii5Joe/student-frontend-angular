import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 //student imports
import { StudentComponent }   from '../student/student.component';
import { StudentFormComponent }   from '../student-form/student-form.component';
import { HomeComponent }   from '../home/home.component';
// grade imports
import { GradeComponent }   from '../grade/grade.component';
import { GradeFormComponent }   from '../grade-form/grade-form.component';
//assignment imports
import { AssignmentComponent }   from '../assignment/assignment.component';
import { AssignmentFormComponent }   from '../assignment-form/assignment-form.component';
//class imports
import { KlassComponent }   from '../klass/klass.component';
import { KlassFormComponent }   from '../klass-form/klass-form.component';
//major imports
import { MajorComponent }   from '../major/major.component';
import { MajorFormComponent }   from '../major-form/major-form.component';
//instructor imports
import { InstructorComponent }   from '../instructor/instructor.component';
import { InstructorFormComponent }   from '../instructor-form/instructor-form.component'; 
//majorclass imports
import { MajorClassComponent }   from '../majorclass/majorclass.component';
import { MajorClassFormComponent }   from '../majorclass-form/majorclass-form.component';
//studentclass imports
import { StudentClassComponent }   from '../studentclass/studentclass.component';
import { StudentClassFormComponent }   from '../studentclass-form/studentclass-form.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  // student routes
  { path: 'student',  component: StudentComponent },
  { path: 'student/edit/:id', component: StudentFormComponent },
  { path: 'student/add', component: StudentFormComponent },
  // grade routes
  { path: 'grade',  component: GradeComponent },
  { path: 'grade/edit/:id', component: GradeFormComponent },
  { path: 'grade/add', component: GradeFormComponent },
  // assignment routes
  { path: 'assignment',  component: AssignmentComponent },
  { path: 'assignment/edit/:id', component: AssignmentFormComponent },
  { path: 'assignment/add', component: AssignmentFormComponent },
  // class routes
  { path: 'klass',  component: KlassComponent },
  { path: 'klass/edit/:id', component: KlassFormComponent },
  { path: 'klass/add', component: KlassFormComponent },
  // major routes
  { path: 'major',  component: MajorComponent },
  { path: 'major/edit/:id', component: MajorFormComponent },
  { path: 'major/add', component: MajorFormComponent },
  // instructor routes
  { path: 'instructor',  component: InstructorComponent },
  { path: 'instructor/edit/:id', component: InstructorFormComponent },
  { path: 'instructor/add', component: InstructorFormComponent },
  // majorclass routes
  { path: 'majorclass',  component: MajorClassComponent },
  { path: 'majorclass/edit/:id', component: MajorClassFormComponent },
  { path: 'majorclass/add', component: MajorClassFormComponent },
  // studentclass routes
  { path: 'studentclass',  component: StudentClassComponent },
  { path: 'studentclass/edit/:id', component: StudentClassFormComponent },
  { path: 'studentclass/add', component: StudentClassFormComponent },

];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
