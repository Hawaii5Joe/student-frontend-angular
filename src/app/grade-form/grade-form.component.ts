
import { Component, OnInit, ViewChild }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { NgForm } from '@angular/forms';

import { DataService } from '../data.service'

@Component({
  selector: 'app-grade-form',
  templateUrl: './grade-form.component.html',
  styleUrls: ['./grade-form.component.css']
})


export class GradeFormComponent implements OnInit {

  successMessage: string;
  errorMessage: string;

  gradesNG: object;

  getRecordForEdit(){
    this.route.params
      .switchMap((params: Params) => this.dataService.getRecord("grade", +params['id']))
      .subscribe(grade => this.gradesNG = grade);
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

  saveGrade(grade: NgForm){
    if(typeof grade.value.grade_id === "number"){
      this.dataService.editRecord("grade", grade.value, grade.value.grade_id)
          .subscribe(
            grade => this.successMessage = "Record updated succesfully",
            error =>  this.errorMessage = <any>error);
    }else{
      this.dataService.addRecord("grade", grade.value)
          .subscribe(
            grade => this.successMessage = "Record added succesfully",
            error =>  this.errorMessage = <any>error);
            this.gradesNG = {};
    }

  }

// FORM VALIDATION STUFF
GradeForm: NgForm;
@ViewChild ('GradeForm') currentForm: NgForm;

ngAfterViewChecked() {
  this.formChanged();
}

formChanged() {
  this.GradeForm = this.currentForm;
  this.GradeForm.valueChanges
    .subscribe(
      data => this.onValueChanged(data)
    );
}

onValueChanged(data?: any) {
  let form = this.GradeForm.form;

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
  'grade': '',
  'grade_id': '',
  
  
};

validationMessages = {
    'grade': {
    'required': 'gradeis required.',
    'minlength': 'id must be 2 characters long.',
    'maxlength': 'id cannot be more than 30 characters long.'
  },
  'grade_id': {
    'required': 'grade id is required.',
    'minlength': 'id must be 2 characters long.',
    'maxlength': 'id cannot be more than 30 characters long.'
  },
  










}

}
