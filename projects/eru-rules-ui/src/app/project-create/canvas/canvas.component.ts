import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { InfoDailogComponent } from "../info-dailog/info-dailog.component";

@Component({
  selector: "app-canvas",
  templateUrl: "./canvas.component.html",
  styleUrls: ["./canvas.component.scss"],
})
export class CanvasComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openSideDrawer() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "574px";
    dialogConfig.height = "100%";
    dialogConfig.position = {
      right: "0px",
    };

    const dailogRef = this.dialog.open(InfoDailogComponent, dialogConfig);
  }
}
