import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectModelListingComponent } from './project-model-listing/project-model-listing.component';

const routes: Routes = [
  {
    path: '', 
    component : ProjectModelListingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectModelRoutingModule { }
