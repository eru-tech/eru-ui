import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { DeleteDailogComponent } from "./delete-dailog/delete-dailog.component";
import {
  AutofocusDirective,
  InlineInputComponent,
} from "./inline-input/inline-input.component";
import { InitialsPipe } from "./pipes/initials.pipe";

@NgModule({
  declarations: [
    DeleteDailogComponent,
    InlineInputComponent,
    InitialsPipe,
    AutofocusDirective,
  ],
  imports: [FormsModule, MatDialogModule, MatButtonModule, CommonModule],
  exports: [DeleteDailogComponent, InlineInputComponent, InitialsPipe, CommonModule],
})
export class SharedModule {}
