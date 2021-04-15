import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ProjectTypeComponent} from './project-type/project-type.component';
import {ProcessComponent} from './process/process.component';

const routes: Routes = [
  { path: '', component: ProjectTypeComponent },
  { path: 'process', component: ProcessComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
