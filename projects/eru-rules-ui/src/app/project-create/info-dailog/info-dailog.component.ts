import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { DataType } from "../../models/data-type.model";
import { Project } from "../../project-listing/models/project.model";

@Component({
  selector: "app-info-dailog",
  templateUrl: "./info-dailog.component.html",
  styleUrls: ["./info-dailog.component.scss"],
})
export class InfoDailogComponent implements OnInit {
  dataTypes: DataType[] | undefined;
  inputForm : FormGroup =  this.fb.group({
    name : ['', Validators.required],
    dataType: ['', Validators.required]
  })

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { shape: string; project: Project },
    public dialogRef: MatDialogRef<InfoDailogComponent>,
    private fb : FormBuilder,
  ) {}

  ngOnInit(): void {
    if (this.data.shape === "input") {
      this.getDataTypes();
    }
  }

  getDataTypes() {
    this.dataTypes = [
      {
        name: "Mehta",
        type: "Object",
        constraints: "[10-20]",
        isExpanded: false,
        dataTypes: [
          {
            name: "Narendra",
            type: "Object",
            constraints: "[10-20]",
            isExpanded: false,
            dataTypes: [
              {
                name: "Rekha",
                type: "String",
                constraints: "[10-20]",
                isExpanded: false,
                dataTypes: [],
              },
            ],
          },
        ],
      },
      {
        name: "Mehta",
        type: "String",
        constraints: "[10-20]",
        isExpanded: false,
        dataTypes: [],
      },
    ];
  }

  onClose(){
    this.dialogRef.close();
  }

  saveForm(){
    console.log('Form Value', this.inputForm.value);
    this.dialogRef.close()
  }
}
