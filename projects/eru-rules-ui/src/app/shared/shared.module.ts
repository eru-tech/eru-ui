import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MaterialModule } from "../material.module";
import { DeleteDailogComponent } from "./delete-dailog/delete-dailog.component";
import {
  AutofocusDirective,
  InlineInputComponent,
} from "./inline-input/inline-input.component";
import { InitialsPipe } from "./pipes/initials.pipe";
import { HeaderComponent } from "./header/header.component";
@NgModule({
  declarations: [
    DeleteDailogComponent,
    InlineInputComponent,
    InitialsPipe,
    AutofocusDirective,
    HeaderComponent,
  ],
  imports: [FormsModule, CommonModule, MaterialModule],
  exports: [
    DeleteDailogComponent,
    InlineInputComponent,
    InitialsPipe,
    CommonModule,
    MaterialModule,
    HeaderComponent,
  ],
})
export class SharedModule {}
