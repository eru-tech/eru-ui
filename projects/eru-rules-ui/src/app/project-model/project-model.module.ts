import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { ProjectModelRoutingModule } from './project-model-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ProjectModelComponent } from './project-model/project-model.component';
import { TableInputComponent } from './table-input/table-input.component';
import { ProjectModelListingComponent } from './project-model-listing/project-model-listing.component';
import { ModelHederComponent } from './model-heder/model-heder.component';



@NgModule({
  declarations: [
    ProjectModelComponent,
    TableInputComponent,
    ProjectModelListingComponent,
    ModelHederComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ProjectModelRoutingModule,
    HttpClientModule,
    SharedModule
  ]
})
export class ProjectModelModule { }
