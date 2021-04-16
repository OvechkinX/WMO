import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements OnInit {

  discipline: any;
  phase: any ;

  constructor() { }

  ngOnInit(): void {
    this.discipline = 9;
    this.phase = 1;
  }


  inception(): any {
    this.phase = 1;
    console.log(this.phase);
  }

  elaboration(): any {
    this.phase = 2;
    console.log(this.phase);
  }

  construction(): any {
    this.phase = 3;
  }

  transition(): any {
    this.phase = 4;
  }

  businessModeling(): any {
    this.discipline = 1;
  }

  requirements(): any {
    this.discipline = 2;
  }

  analysis(): any {
    this.discipline = 3;
  }

  implementation(): any {
    this.discipline = 4;
  }

  test(): any {
    this.discipline = 5;
  }

  deployment(): any {
    this.discipline = 6;
  }

  configuration(): any {
    this.discipline = 7;
  }

  projectManagement(): any {
    this.discipline = 8;
  }

  environment(): any {
    this.discipline = 9;
  }

  next() {
    if (this.discipline === 9  && this.phase === 1)
      this.discipline = 8;
    else if (this.discipline === 8  && this.phase === 1)
      this.discipline = 1;
    else if (this.discipline === 1  && this.phase === 1)
      this.discipline = 2;
    else if (this.discipline === 2  && this.phase === 1)
      this.discipline = 3;
    else if (this.discipline === 3  && this.phase === 1)
      this.discipline = 7;
    else if (this.discipline === 7  && this.phase === 1)
      this.discipline = 5;
    else if (this.discipline === 5  && this.phase === 1)
    {
      this.discipline = 3;
      this.phase = 2;
    }
    else if (this.discipline === 3  && this.phase === 2)
      this.discipline = 2;
    else if (this.discipline === 2  && this.phase === 2)
      this.discipline = 1;
    else if (this.discipline === 1  && this.phase === 2)
      this.discipline = 8;
    else if (this.discipline === 8  && this.phase === 2)
      this.discipline = 7;
    else if (this.discipline === 7  && this.phase === 2)
      this.discipline = 4;
    else if (this.discipline === 4 && this.phase === 2)
      this.discipline = 5;
    else if (this.discipline === 5  && this.phase === 2)
      this.discipline = 6;
    else if (this.discipline === 6  && this.phase === 2)
    {
      this.discipline = 7;
      this.phase = 3;
    }
    else if (this.discipline === 7  && this.phase === 3)
      this.discipline = 1;
    else if (this.discipline === 1  && this.phase === 3)
      this.discipline = 4;
    else if (this.discipline === 4  && this.phase === 3)
      this.discipline = 5;
    else if (this.discipline === 5  && this.phase === 3)
      this.discipline = 9;
    else if (this.discipline === 9  && this.phase === 3)
      this.discipline = 8;
    else if (this.discipline === 8  && this.phase === 3)
    {
      this.discipline = 9;
      this.phase = 4;
    }
    else if (this.discipline === 9  && this.phase === 4)
      this.discipline = 4;
    else if (this.discipline === 4  && this.phase === 4)
      this.discipline = 7;
    else if (this.discipline === 7  && this.phase === 4)
      this.discipline = 8;
    else if (this.discipline === 8  && this.phase === 4)
      this.discipline = 6;
  }

  back() {

  }
}
