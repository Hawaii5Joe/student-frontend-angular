
import { Component, OnInit, ViewChild }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';
import { NgForm } from '@angular/forms';

import { DataService } from '../data.service'

@Component({
  selector: 'app-majorclass-form',
  templateUrl: './majorclass-form.component.html',
  styleUrls: ['./majorclass-form.component.css']
})
export class MajorClassFormComponent implements OnInit {
  
    successMessage: string;
    errorMessage: string;
  
    majorclass: object;
  
    getRecordForEdit(){
      this.route.params
        .switchMap((params: Params) => this.dataService.getRecord("majorclass", +params['id']))
        .subscribe(majorclass => this.majorclass = majorclass);
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
  
    saveMajorClass(majorclass: NgForm){
      if(typeof majorclass.value.majorclass_id === "number"){
        this.dataService.editRecord("majorclass", majorclass.value, majorclass.value.majorclass_id)
            .subscribe(
              majorclass => this.successMessage = "Record updated succesfully",
              error =>  this.errorMessage = <any>error);
      }else{
        this.dataService.addRecord("majorclass", majorclass.value)
            .subscribe(
              majorclass => this.successMessage = "Record added succesfully",
              error =>  this.errorMessage = <any>error);
              this.majorclass = {};
      }
  
    }
  
  // FORM VALIDATION STUFF
  MajorClassForm: NgForm;
  @ViewChild ('MajorClassForm') currentForm: NgForm;

  ngAfterViewChecked() {
    this.formChanged();
  }

  formChanged() {
    this.MajorClassForm = this.currentForm;
    this.MajorClassForm.valueChanges
      .subscribe(
        data => this.onValueChanged(data)
      );
  }

  onValueChanged(data?: any) {
    let form = this.MajorClassForm.form;

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
    'major_id': '',
    'class_id': '',
    
  };

  validationMessages = {
      'major_id': {
      'required': 'major id name is required.',
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
  