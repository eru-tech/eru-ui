import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { ProjectCreateComponent } from "./project-create/project-create.component";
import { CanvasComponent } from "./canvas/canvas.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { ProjectCreateRoutingModule } from "./project-create-routing.module";
import { SharedModule } from "../shared/shared.module";
import { InfoDailogComponent } from './info-dailog/info-dailog.component';

@NgModule({
  declarations: [
    ProjectCreateComponent,
    CanvasComponent,
    NavigationComponent,
    InfoDailogComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ProjectCreateRoutingModule,
    SharedModule,
  ],
})
export class ProjectCreateModule {}
