
import { Component, OnInit, ViewChild }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { NgForm } from '@angular/forms';

import { DataService } from '../data.service'

@Component({
  selector: 'app-assignment-form',
  templateUrl: './assignment-form.component.html',
  styleUrls: ['./assignment-form.component.css']
})
export class AssignmentFormComponent implements OnInit {

  successMessage: string;
  errorMessage: string;

  assignment: object;

  getRecordForEdit(){
    this.route.params
      .switchMap((params: Params) => this.dataService.getRecord("assignment", +params['id']))
      .subscribe(assignment => this.assignment = assignment);
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

  saveAssignment(assignment: NgForm){
    if(typeof assignment.value.assignment_id === "number"){
      this.dataService.editRecord("assignment", assignment.value, assignment.value.assignment_id)
          .subscribe(
            assignment => this.successMessage = "Record updated succesfully",
            error =>  this.errorMessage = <any>error);
    }else{
      this.dataService.addRecord("assignment", assignment.value)
          .subscribe(
            assignment => this.successMessage = "Record added succesfully",
            error =>  this.errorMessage = <any>error);
            this.assignment = {};
    }

  }

// FORM VALIDATION STUFF
AssignmentForm: NgForm;
@ViewChild ('AssignmentForm') currentForm: NgForm;

ngAfterViewChecked() {
  this.formChanged();
}

formChanged() {
  this.AssignmentForm = this.currentForm;
  this.AssignmentForm.valueChanges
    .subscribe(
      data => this.onValueChanged(data)
    );
}

onValueChanged(data?: any) {
  let form = this.AssignmentForm.form;

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
  'assignment_nbr': '',
  'grade_id': '',
  'class_id': '',
  
};

validationMessages = {
    'student_id': {
    'required': 'student id is required.',
    'minlength': 'id must be 2 characters long.',
    'maxlength': 'id cannot be more than 30 characters long.'
  },
  'assignment_nbr': {
    'required': 'assignment nbr is required.',
    'minlength': 'id must be 2 characters long.',
    'maxlength': 'id cannot be more than 30 characters long.'
  },
  'grade_id': {
    'required': 'grade id is required.',
    'minlength': 'id must be 2 characters long.',
    'maxlength': 'id cannot be more than 30 characters long.'
  },
  'class_id': {
    'required': 'class id is required.',
    'minlength': 'id must be 2 characters long.',
    'maxlength': 'id cannot be more than 30 characters long.'
  },







}















}
