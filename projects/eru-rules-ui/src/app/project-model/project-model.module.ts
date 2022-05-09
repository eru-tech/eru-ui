import { NgModule } from '@angular/core';
import { ProjectModelComponent } from './project-model/project-model.component';
import { ProjectModelRoutingModule } from './project-model-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableInputComponent } from './table-input/table-input.component';
import { ProjectModelListingComponent } from './project-model-listing/project-model-listing.component';
import { ProjectModalFooterComponent } from './project-modal-footer/project-modal-footer.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProjectModelComponent,
    TableInputComponent,
    ProjectModelListingComponent,
    ProjectModalFooterComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ProjectModelRoutingModule,
    SharedModule
  ]
})
export class ProjectModelModule { }
