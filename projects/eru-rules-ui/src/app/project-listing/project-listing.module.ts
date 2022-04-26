import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTableModule } from "@angular/material/table";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatRippleModule } from "@angular/material/core";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

import { ProjectListingRoutingModule } from "./project-listing-routing.module";
import { ProjectListingComponent } from "./project-listing/project-listing.component";
import { MatIconModule } from "@angular/material/icon";
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
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MatIconModule,
    MatProgressSpinnerModule,
    EffectsModule.forFeature([ProjectListingEffects]),
    StoreModule.forFeature("projectListingModule", projectListingReducer),
    SharedModule
  ],
})
export class ProjectListingModule {}
