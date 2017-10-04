
import { Component, OnInit, ViewChild}      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { NgForm } from '@angular/forms';

import { DataService } from '../data.service'

@Component({
  selector: 'app-studentclass-form',
  templateUrl: './studentclass-form.component.html',
  styleUrls: ['./studentclass-form.component.css']
})
export class StudentClassFormComponent implements OnInit {
  
  

    successMessage: string;
    errorMessage: string;
  
    studentclass: object;
  
    getRecordForEdit(){
      this.route.params
        .switchMap((params: Params) => this.dataService.getRecord("studentclass", +params['id']))
        .subscribe(studentclass => this.studentclass = studentclass);
    }
  
    constructor(
      private dataService: DataService,
      private route: ActivatedRoute,
      private location: Location
    ) {}
  
    ngOnInit() {
      this.route.params
        .subscribe((params: Params) => {
          (+params['id']) ? this.getRecordForEdit() : null;
        });
  
    }
  
    saveStudentClass(studentclass: NgForm){
      if(typeof studentclass.value.studentclass_id === "number"){
        this.dataService.editRecord("studentclass", studentclass.value, studentclass.value.studentclass_id)
            .subscribe(
              studentclass => this.successMessage = "Record updated succesfully",
              error =>  this.errorMessage = <any>error);
      }else{
        this.dataService.addRecord("studentclass", studentclass.value)
            .subscribe(
              studentclass => this.successMessage = "Record added succesfully",
              error =>  this.errorMessage = <any>error);
              this.studentclass = {};
      }
  
    }
  
    // FORM VALIDATION STUFF
    StudentClassForm: NgForm;
    @ViewChild ('StudentClassForm') currentForm: NgForm;

    ngAfterViewChecked() {
      this.formChanged();
    }
  
    formChanged() {
      this.StudentClassForm = this.currentForm;
      this.StudentClassForm.valueChanges
        .subscribe(
          data => this.onValueChanged(data)
        );
    }
  
    onValueChanged(data?: any) {
      let form = this.StudentClassForm.form;
  
      for (let field in this.formErrors) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
  
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            this.formErrors[field] += messages[key] + ' ';
          }
        }
      }
    }
  
    formErrors = {
      'student_id': '',
      'class_id': '',
      
    };
  
    validationMessages = {
      'student_id': {
        'required': 'student id name is required.',
        'minlength': 'id must be 2 characters long.',
        'maxlength': 'id cannot be more than 30 characters long.'
      },
      'class_id': {
        'required': 'class id is required.',
        'minlength': 'id must be 2 characters long.',
        'maxlength': 'id cannot be more than 30 characters long.'
      },
      
    };







  }
  