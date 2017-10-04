
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { NgForm } from '@angular/forms';
import {MdDialog, MdDialogRef} from '@angular/material'

import { DataService } from '../data.service'
import {DeleteConfirmComponent} from '../delete-confirm/delete-confirm.component'

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']

})
export class StudentComponent implements OnInit {

  student: object;
  majors: object[];


  errorMessage: string;
  successMessage: string;
  students: any[];
  mode = 'Observable';
 
  constructor (private dataService: DataService, public dialog: MdDialog) {}
 
  ngOnInit() { this.getStudents(); }
 
  getStudents() {
    this.dataService.getRecords("student")
      .subscribe(
        students => this.students = students,
        error =>  this.errorMessage = <any>error);
  }

  deleteStudent(id:number) {

    let dialogRef = this.dialog.open(DeleteConfirmComponent);

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.dataService.deleteRecord("student", id)
          .subscribe(
            student => {this.successMessage = "Record(s) deleted succesfully"; this.getStudents(); },
            error =>  this.errorMessage = <any>error);
      }
    });
  }

  

}