import { Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { DataType } from "../../models/data-type.model";

@Component({
  selector: "app-project-model",
  templateUrl: "./project-model.component.html",
  styleUrls: ["./project-model.component.scss"],
})
export class ProjectModelComponent implements OnInit {
  dataSource: DataType[] = [
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
  dummyElement: DataType = {
    name: "Please Change Name",
    type: "Any",
    constraints: "",
    isExpanded: false,
    dataTypes: [],
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
    switch (data.length) {
      case 1:
        this.dataSource[data[0]].isExpanded = true;
        this.dataSource[data[0]].dataTypes.push(this.dummyElement);
        break;
      case 2:
        this.dataSource[data[0]].dataTypes[data[1]].isExpanded = true;
        this.dataSource[data[0]].dataTypes[data[1]].dataTypes.push(
          this.dummyElement
        );
        break;
      case 3:
        this.dataSource[data[0]].dataTypes[data[1]].dataTypes[
          data[2]
        ].isExpanded = true;
        this.dataSource[data[0]].dataTypes[data[1]].dataTypes[
          data[2]
        ].dataTypes.push(this.dummyElement);
        break;
      case 4:
        this.dataSource[data[0]].dataTypes[data[1]].dataTypes[
          data[2]
        ].dataTypes[data[3]].isExpanded = true;
        this.dataSource[data[0]].dataTypes[data[1]].dataTypes[
          data[2]
        ].dataTypes[data[3]].dataTypes.push(this.dummyElement);
        break;
      default:
        this.dataSource.push(this.dummyElement);
        break;
    }
  }

  dataChange() {}

  getEditEnabled(data: DataType): boolean {
    if (data.name === "Please Change Name" && data.type === "Any") {
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
        (!this.options.includes(element.type) || element.type === "Object")
      ) {
        customDataTypes.push(element.name);
      }
    });
    return customDataTypes;
  }
}
