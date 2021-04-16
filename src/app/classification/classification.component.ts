import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProjectType} from '../Model/projectType';

@Component({
  selector: 'app-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.scss']
})
export class ClassificationComponent implements OnInit {

  classForm: FormGroup;
  submitted = false;
  projectType: ProjectType;

  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.classForm = this.formBuilder.group({
      size: ['', Validators.required],
      team: ['', Validators.required],
      time: ['', Validators.required],
      cost: ['', Validators.required],
      change: ['', Validators.required],
      complication: ['', Validators.required],
      risk: ['', Validators.required]
    });

  }


  getF() {

    if (this.classForm.valid === false) {
      console.log(this.classForm.valid);
    } else {

    this.projectType = new class implements ProjectType {
      change: number;
      complicated: number;
      cost: number;
      risk: number;
      size: number;
      team: number;
      time: number;
    }
      this.projectType.size = this.classForm.value.size;
      this.projectType.team = this.classForm.value.team;
      this.projectType.time = this.classForm.value.time;
      this.projectType.cost = this.classForm.value.cost;
      this.projectType.change = this.classForm.value.change;
      this.projectType.complicated = this.classForm.value.complication;
      this.projectType.risk = this.classForm.value.risk;
      console.log(this.projectType)
    }

  }


  onSubmit() {
    this.submitted = true;

    if (this.classForm.invalid) {
      return;
    }


  }

}
