import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    loadChildren: () => import('./project-listing/project-listing.module').then(m => m.ProjectListingModule)
  },
  {
    path: 'list', 
    loadChildren: () => import('./project-listing/project-listing.module').then(m => m.ProjectListingModule)
  },
  {
    path: 'create', 
    loadChildren: () => import('./project-create/project-create.module').then(m => m.ProjectCreateModule)
  },
  {
    path: 'data-type', 
    loadChildren: () => import('./project-model/project-model.module').then(m => m.ProjectModelModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
