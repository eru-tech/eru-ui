import { Component, Inject, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { SubSink } from "../../shared/subsink";

import { DataType } from "../../models/data-type.model";
import { Project } from "../../project-listing/models/project.model";
import { ProjectModelService } from "../../project-model/project-model.service";

@Component({
  selector: "app-info-dailog",
  templateUrl: "./info-dailog.component.html",
  styleUrls: ["./info-dailog.component.scss"],
})
export class InfoDailogComponent implements OnInit, OnDestroy {
  dataTypes: DataType[] | undefined;
  decisionOptions : string[] = ["Literal Expression", "Context", "Decision Table", "Relation", "Function", "Invocation", "List"];
  subSink = new SubSink();
  title = "";
  subtitle = "";
  form: FormGroup = this.fb.group({
    name : ['', Validators.required],
    dataType : ['', Validators.required]
  });

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { shape: string; project: Project },
    public dialogRef: MatDialogRef<InfoDailogComponent>,
    private fb: FormBuilder,
    private modelService: ProjectModelService
  ) {}

  ngOnInit(): void {
    this.getData();
    this.registerFormValueChanges();
  }

  /**
   * @description
   * To fetch the related dependcies of the component
   */
  getData(){
    switch (this.data.shape) {
      case "input":
        this.handleInputBox();
        break;
      case "decision":
        this.handleDecisionBox();
        break;
    }
  }

  /**
   * @description Register value changes on all or certain control of `form`.                           
   */
  registerFormValueChanges(){
    this.form.get('select_logic_type')?.valueChanges.subscribe((data) => {
      if(data === "Literal Expression"){
        this.addFormControls(['literal_expression']);
      }else{
        this.removeFormControls(['literal_expression']);

      }
    })

  }

  /**
   * Handle dependencies of input shape
   */
  handleInputBox(){
    this.subSink.add(
      this.modelService.getDataTypes().subscribe({
        next: (data : any) => {
          this.dataTypes = this.modelService.formatDataType(data.DataTypes, false);
        },
        error: (err : any) =>{
          console.log("Error", err)
        }
      })
    );
    this.title = "Input";
    this.subtitle = "Select Data Type";
    // Task : diable input of other shapes to avoid errors
  }

  /**
   * Handle dependencies of decision shape
   */
  handleDecisionBox(){
    this.title = "Decision";
    this.subtitle = "Select Decsion Property";
    this.removeFormControls(["name", "dataType"]);
    this.decisionOptions = ["Literal Expression", "Context", "Decision Table", "Relation", "Function", "Invocation", "List"];
    this.addFormControls(['select_logic_type']);
  }

  /**
   * 
   * @param controls Array of name of controls to remove.
   */
  removeFormControls(controls : string[]){
    controls.forEach(control =>{
      this.form.removeControl(control);
    })
  }

  /**
   * 
   * @param controls Array of name of controls to add. 
   */
  addFormControls(controls : string[]){
    controls.forEach(control =>{
      this.form.addControl(control, new FormControl('', Validators.required));
    })
  }

  /**
   * @description Get list of data type for input shape
   */
  getDataTypes() {
    this.modelService.getDataTypes().subscribe({
      next: (data: any) => {
        if (data) {
          this.dataTypes = this.modelService.formatDataType(data.DataTypes);
        } else {
          this.dataTypes = [];
        }
      },
      error: (error) => console.log(error),
    });
  }

  onClose() {
    this.dialogRef.close();
  }

  saveForm() {
    this.dialogRef.close();
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }
}
