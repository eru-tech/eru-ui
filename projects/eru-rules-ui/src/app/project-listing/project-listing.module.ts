import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ProjectListingRoutingModule } from "./project-listing-routing.module";
import { ProjectListingComponent } from "./project-listing/project-listing.component";
import { HttpClientModule } from "@angular/common/http";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";

import { ProjectListingEffects } from "./store/effects/project-listing.effects";
import { projectListingReducer } from "./store/reducers/index";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    ProjectListingComponent,
  ],
  imports: [
    ProjectListingRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    EffectsModule.forFeature([ProjectListingEffects]),
    StoreModule.forFeature("projectListingModule", projectListingReducer),
    SharedModule
  ],
})
export class ProjectListingModule {}
