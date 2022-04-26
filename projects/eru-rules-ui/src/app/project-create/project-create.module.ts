import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { ProjectCreateComponent } from "./project-create/project-create.component";
import { CanvasComponent } from "./canvas/canvas.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { HeaderComponent } from "./header/header.component";
import { ProjectCreateRoutingModule } from "./project-create-routing.module";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTabsModule } from "@angular/material/tabs";
import { SharedModule } from "../shared/shared.module";
import { MatIconModule } from "@angular/material/icon";
import { InfoDailogComponent } from './info-dailog/info-dailog.component';

@NgModule({
  declarations: [
    ProjectCreateComponent,
    CanvasComponent,
    NavigationComponent,
    HeaderComponent,
    InfoDailogComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ProjectCreateRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTabsModule,
    MatIconModule,
    SharedModule,
  ],
})
export class ProjectCreateModule {}
