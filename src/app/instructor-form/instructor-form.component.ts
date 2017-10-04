
import { Component, OnInit, ViewChild }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { NgForm } from '@angular/forms';

import { DataService } from '../data.service'

@Component({
  selector: 'app-instructor-form',
  templateUrl: './instructor-form.component.html',
  styleUrls: ['./instructor-form.component.css']
})
export class InstructorFormComponent implements OnInit {
  
    successMessage: string;
    errorMessage: string;
  
    instructor: object;
  
    getRecordForEdit(){
      this.route.params
        .switchMap((params: Params) => this.dataService.getRecord("instructor", +params['id']))
        .subscribe(instructor => this.instructor = instructor);
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
  
    saveinstructor(instructor: NgForm){
      if(typeof instructor.value.instructor_id === "number"){
        this.dataService.editRecord("instructor", instructor.value, instructor.value.instructor_id)
            .subscribe(
              instructor => this.successMessage = "Record updated succesfully",
              error =>  this.errorMessage = <any>error);
      }else{
        this.dataService.addRecord("instructor", instructor.value)
            .subscribe(
              instructor => this.successMessage = "Record added succesfully",
              error =>  this.errorMessage = <any>error);
              this.instructor = {};
      }
  
    }

// FORM VALIDATION STUFF
InstructorForm: NgForm;
@ViewChild ('InstructorForm') currentForm: NgForm;

ngAfterViewChecked() {
  this.formChanged();
}

formChanged() {
  this.InstructorForm = this.currentForm;
  this.InstructorForm.valueChanges
    .subscribe(
      data => this.onValueChanged(data)
    );
}

onValueChanged(data?: any) {
  let form = this.InstructorForm.form;

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
  'first_name': '',
  'last_name': '',
  'major_id': '',
  'years_of_experience': '',
  'tenured': '',
  
};

validationMessages = {
  'first_name': {
    'required': 'first name name is required.',
    'minlength': 'id must be 2 characters long.',
    'maxlength': 'id cannot be more than 30 characters long.'
  },
  'last_name': {
    'required': 'last name is required.',
    'minlength': 'id must be 2 characters long.',
    'maxlength': 'id cannot be more than 30 characters long.'
  },
  'major_id': {
    'required': 'major id is required.',
    'minlength': 'id must be 2 characters long.',
    'maxlength': 'id cannot be more than 30 characters long.'
  },
  'years_of_experience': {
    'required': 'years of experience is required.',
    'minlength': 'id must be 2 characters long.',
    'maxlength': 'id cannot be more than 30 characters long.'
  },
  'tenured': {
    'required': 'tenured is required.',
    'pattern': 'tenured needs to be 0 or 1.'
    
  },

  
  
}

};