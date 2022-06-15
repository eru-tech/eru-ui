import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataType } from "../../models/data-type.model";
import { Project } from "../../project-listing/models/project.model";
import { ProjectModelService } from "../project-model.service";

@Component({
  selector: "app-project-model-listing",
  templateUrl: "./project-model-listing.component.html",
  styleUrls: ["./project-model-listing.component.scss"],
})
export class ProjectModelListingComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private dataTypeService: ProjectModelService
  ) {}
  selectedProjectId: string | undefined;
  versions: number[] | undefined;
  selectedProject: Project | undefined;
  dataTypes: any | undefined;

  ngOnInit(): void {
    this.router.paramMap.subscribe((params) => {
      const id = params.get("id");
      if (id) {
        this.selectedProjectId = id;
      }
    });
    this.getProjectDetails();
    this.getProjectVersion();
    this.getDataTypes();
  }

  getProjectDetails() {
    this.selectedProject = {
      createdBy: "Yash Mehta",
      projectName: "Project 1",
      lastUpdateDate: "2022-04-16T13:44:40.036158495Z",
    };
  }

  getProjectVersion() {
    this.versions = [1, 2, 3, 4, 5];
  }

  getDataTypes() {
    // API to fetch the project datatypes
    this.dataTypeService.getDataTypes().subscribe({
      next: (data: any) => {
        if (data) {
          this.dataTypes = this.dataTypeService.formatDataType(data.DataTypes, true);
        } else {
          this.dataTypes = [];
        }
      },
      error: (error) => console.log(error),
    });
  }

  actionButtonClicked() {}

  handleChange(data : DataType[]){
    const mapedObj = this.dataTypeService.unFormatDataType(data);
    this.dataTypeService.CreateDataTypes(mapedObj);
  }
}
