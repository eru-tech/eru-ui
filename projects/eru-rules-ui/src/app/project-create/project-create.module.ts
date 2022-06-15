import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ProjectCreateComponent } from "./project-create/project-create.component";
import { CanvasComponent } from "./canvas/canvas.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { ProjectCreateRoutingModule } from "./project-create-routing.module";
import { SharedModule } from "../shared/shared.module";
import { InfoDailogComponent } from './info-dailog/info-dailog.component';
import { ContextComponent } from './context/context.component';
import { DecisionComponent } from './decision/decision.component';
import { RelationComponent } from './relation/relation.component';
import { FunctionComponent } from './function/function.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    ProjectCreateComponent,
    CanvasComponent,
    NavigationComponent,
    InfoDailogComponent,
    ContextComponent,
    DecisionComponent,
    RelationComponent,
    FunctionComponent,
    ListComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ProjectCreateRoutingModule,
    SharedModule,
  ],
})
export class ProjectCreateModule {}
