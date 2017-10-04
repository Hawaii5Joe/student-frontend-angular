
import { Component, OnInit, ViewChild }   from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { NgForm } from '@angular/forms';

import { DataService } from '../data.service'

@Component({
  selector: 'app-major-form',
  templateUrl: './major-form.component.html',
  styleUrls: ['./major-form.component.css']
})
export class MajorFormComponent implements OnInit {
  
    successMessage: string;
    errorMessage: string;
  
    majorObj: object;
  
    getRecordForEdit(){
      this.route.params
        .switchMap((params: Params) => this.dataService.getRecord("major", params['id']))
        .subscribe(major => this.majorObj = major);
        console.log(this.majorObj);
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
  
    saveMajor(major: NgForm){
      if(typeof major.value.major_id === "number"){
        this.dataService.editRecord("major", major.value, major.value.major_id)
            .subscribe(
              major => this.successMessage = "Record updated succesfully",
              error =>  this.errorMessage = <any>error);
      }else{
        this.dataService.addRecord("major", major.value)
            .subscribe(
              major => this.successMessage = "Record added succesfully",
              error =>  this.errorMessage = <any>error);
              this.majorObj = {};
      }
  
    }
  
    // FORM VALIDATION STUFF
  MajorForm: NgForm;
  @ViewChild ('MajorForm') currentForm: NgForm;

  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    this.MajorForm = this.currentForm;
    this.MajorForm.valueChanges
      .subscribe(
        data => this.onValueChanged(data)
      );
  }

  onValueChanged(data?: any) {
    let form = this.MajorForm.form;

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
    'sat': '',
    'major': '',
    
  };

  validationMessages = {
      'sat': {
      'required': 'sat  is required.',
      'minlength': 'id must be 2 characters long.',
      'maxlength': 'id cannot be more than 30 characters long.'
    },
    'major': {
      'required': 'major is required.',
      'minlength': 'id must be 2 characters long.',
      'maxlength': 'id cannot be more than 30 characters long.'
    },






  }

};