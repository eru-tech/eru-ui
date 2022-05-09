import { Component, Input, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { Project } from "../../project-listing/models/project.model";
import { InfoDailogComponent } from "../info-dailog/info-dailog.component";

@Component({
  selector: "app-canvas",
  templateUrl: "./canvas.component.html",
  styleUrls: ["./canvas.component.scss"],
})
export class CanvasComponent implements OnInit {
  @Input() selectedProject : Project| undefined
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openSideDrawer(inputType : string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      shape : inputType,
      project : this.selectedProject!
    }
    dialogConfig.width = "574px";
    dialogConfig.height = "100%";
    dialogConfig.position = {
      right: "0px",
    };

    const dailogRef = this.dialog.open(InfoDailogComponent, dialogConfig);
  }
}
