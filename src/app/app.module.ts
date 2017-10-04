import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AppRoutingModule } from './routing/routing.module';
import { StudentComponent } from './student/student.component';
import { HomeComponent } from './home/home.component';
import { DataService } from './data.service';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';
import { StatusMessageComponent } from './status-message/status-message.component';
// component linking i had to put in
import { StudentFormComponent } from './student-form/student-form.component';
import { GradeFormComponent } from './grade-form/grade-form.component';
import { GradeComponent } from './grade/grade.component';
import { MajorComponent } from './major/major.component';
import { MajorFormComponent } from './major-form/major-form.component';
import { AssignmentComponent } from './assignment/assignment.component';
import { AssignmentFormComponent } from './assignment-form/assignment-form.component';
import { KlassComponent } from './klass/klass.component';
import { KlassFormComponent } from './klass-form/klass-form.component';
import { InstructorComponent } from './instructor/instructor.component';
import { InstructorFormComponent } from './instructor-form/instructor-form.component';
import { StudentClassComponent } from './studentclass/studentclass.component';
import { StudentClassFormComponent } from './studentclass-form/studentclass-form.component';
import { MajorClassComponent } from './majorclass/majorclass.component';
import { MajorClassFormComponent } from './majorclass-form/majorclass-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    StudentComponent,
    HomeComponent,
    DeleteConfirmComponent,
    StudentFormComponent,
    StatusMessageComponent,
    GradeComponent,
    GradeFormComponent,
    MajorComponent,
    MajorFormComponent,
    AssignmentComponent,
    AssignmentFormComponent,
    KlassComponent,
    KlassFormComponent,
    InstructorComponent,
    InstructorFormComponent,
    StudentClassComponent,
    StudentClassFormComponent,
    MajorComponent,
    MajorClassComponent,
    MajorClassFormComponent,
    MajorFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  entryComponents: [DeleteConfirmComponent],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
