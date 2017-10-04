
import { Component, OnInit, ViewChild }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { NgForm } from '@angular/forms';

import { DataService } from '../data.service'

@Component({
  selector: 'app-klass-form',
  templateUrl: './klass-form.component.html',
  styleUrls: ['./klass-form.component.css']
})

export class KlassFormComponent implements OnInit {
  
    successMessage: string;
    errorMessage: string;
  
    klass: object;
  
    getRecordForEdit(){
      this.route.params
        .switchMap((params: Params) => this.dataService.getRecord("class", +params['id']))
        .subscribe(klass => this.klass = klass);
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
  
    saveKlass(klassForm: NgForm){
      if(typeof klassForm.value.class_id === "number"){
        this.dataService.editRecord("class", klassForm.value, klassForm.value.class_id)
            .subscribe(
              success => this.successMessage = "Record updated succesfully",
              error =>  this.errorMessage = <any>error);
      }else{
        this.dataService.addRecord("class", klassForm.value)
            .subscribe(
              success => this.successMessage = "Record added succesfully",
              error =>  this.errorMessage = <any>error);
              this.klass = {};
      }
  
    }

// FORM VALIDATION STUFF
KlassForm: NgForm;
@ViewChild ('KlassForm') currentForm: NgForm;

ngAfterViewChecked() {
  this.formChanged();
}

formChanged() {
  this.KlassForm = this.currentForm;
  this.KlassForm.valueChanges
    .subscribe(
      data => this.onValueChanged(data)
    );
}

onValueChanged(data?: any) {
  let form = this.KlassForm.form;

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
  'instructor_id': '',
  'subject': '',
  'course': '',
  
};

validationMessages = {
    'instructor_id': {
    'required': 'instructor_id  is required.',
    'minlength': 'id must be 2 characters long.',
    'maxlength': 'id cannot be more than 30 characters long.'
  },
  'subject': {
    'required': 'subject is required.',
    'minlength': 'id must be 2 characters long.',
    'maxlength': 'id cannot be more than 30 characters long.'
  },
  'course': {
    'required': 'course is required.',
    'minlength': 'id must be 2 characters long.',
    'maxlength': 'id cannot be more than 30 characters long.'
  },





}







  
  };
