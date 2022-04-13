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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
