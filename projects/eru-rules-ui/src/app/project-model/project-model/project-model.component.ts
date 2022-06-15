import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from "@angular/core";
import { DataType } from "../../models/data-type.model";

@Component({
  selector: "app-project-model",
  templateUrl: "./project-model.component.html",
  styleUrls: ["./project-model.component.scss"],
})
export class ProjectModelComponent implements OnInit {
  @Input() dataSource: DataType[] = [];
  @Output() dataSourceChange : EventEmitter<DataType[]> = new EventEmitter<DataType[]>();
  dummyElement: DataType = {
    Name: "Please Change Name",
    Type: "Any",
    Constraints: "",
    IsExpanded: false,
    IsArray: false,
    SubDataTypes: [],
  };
  options = [
    "Object",
    "Any",
    "Boolean",
    "Context",
    "Date",
    "Date & Time",
    "Date & Time Duration",
    "Number",
    "String",
    "Time",
    "Years & Monthh Duration",
  ];

  constructor() {}

  ngOnInit(): void {}
  selectionChange(event: string, index: number) {
    console.log("event", event);
  }

  dropClicked(event: boolean, index: number, template: TemplateRef<any>) {
    console.log("event", event);
    console.log("index", index);
    console.log("template", template);
  }

  getCurrent() {
    console.log("Current", this.dataSource);
  }

  addRow(data: number[]) {
    if(this.dataSource.length > 0){
      switch (data.length) {
        case 1:
          this.dataSource[data[0]].IsExpanded = true;
          this.dataSource[data[0]].SubDataTypes.push(this.dummyElement);
          break;
        case 2:
          this.dataSource[data[0]].SubDataTypes[data[1]].IsExpanded = true;
          this.dataSource[data[0]].SubDataTypes[data[1]].SubDataTypes.push(
            this.dummyElement
          );
          break;
        case 3:
          this.dataSource[data[0]].SubDataTypes[data[1]].SubDataTypes[
            data[2]
          ].IsExpanded = true;
          this.dataSource[data[0]].SubDataTypes[data[1]].SubDataTypes[
            data[2]
          ].SubDataTypes.push(this.dummyElement);
          break;
        case 4:
          this.dataSource[data[0]].SubDataTypes[data[1]].SubDataTypes[
            data[2]
          ].SubDataTypes[data[3]].IsExpanded = true;
          this.dataSource[data[0]].SubDataTypes[data[1]].SubDataTypes[
            data[2]
          ].SubDataTypes[data[3]].SubDataTypes.push(this.dummyElement);
          break;
        default:
          this.dataSource.push(this.dummyElement);
          break;
      }
    } 
  }

  dataChange() {
    this.dataSourceChange.emit(this.dataSource);
  }

  getEditEnabled(data: DataType): boolean {
    if (data.Name === "Please Change Name" && data.Type === "Any") {
      return true;
    } else {
      return false;
    }
  }

  getCustomOptions(data: DataType[], index: number): string[] {
    const customDataTypes: string[] = [];
    data.forEach((element, i) => {
      if (
        (i !== index) &&
        (!this.options.includes(element.Type) || element.Type === "Object")
      ) {
        customDataTypes.push(element.Name);
      }
    });
    return customDataTypes;
  }
}
