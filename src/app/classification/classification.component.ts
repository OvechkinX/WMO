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
  cassified: number = 0;

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

      console.log(this.projectType);
      let score = this.classifyProject(this.projectType);

      if(score > 7 && score < 12.5)
        this.cassified = 1;
      if(score >= 12.5 && score < 17)
        this.cassified = 2;
      if(score >= 17 && score < 21.2)
        this.cassified = 3;
      if(score >= 21.2 && score < 26)
        this.cassified = 4;
      if(score >= 26 && score < 28.7)
        this.cassified = 5;
      if (score >= 27.7)
        this.cassified = 6;
    }

  }

  classifyProject(project: ProjectType): number {
    let sum: number;
    const _SIZE = 2;
    const _TEAM = 0.5;
    const _TIME = 1;
    const _COST = 1.5;
    const _CHANGE = 0.5;
    const _COMPLICATED = 0.7;
    const _RISK = 1.2;

    sum = _SIZE * project.size + _TEAM * project.team + _TIME * project.time + _COST * project.cost + _CHANGE * project.change + _COMPLICATED * project.complicated + _RISK * project.risk;
    console.log(sum);
    return sum;

  }


  onSubmit() {
    this.submitted = true;

    if (this.classForm.invalid) {
      return;
    }


  }

  backToClass() {
    this.cassified = 0;
  }
}
