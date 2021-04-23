import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProjectTypeComponent} from './project-type/project-type.component';
import {ProcessComponent} from './process/process.component';
import {ClassificationComponent} from './classification/classification.component';
import {Process2Component} from './process2/process2.component';

const routes: Routes = [
  { path: '', component: ProjectTypeComponent },
  { path: 'process', component: ProcessComponent },
  { path: 'classification', component: ClassificationComponent },
  { path: 'process2', component: Process2Component }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
