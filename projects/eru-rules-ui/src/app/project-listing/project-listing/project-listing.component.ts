import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { MatSort } from "@angular/material/sort";
import { select, Store } from "@ngrx/store";

import { State } from "./../../store/index";
import { Project } from "../models/project.model";
import { SubSink } from "../../shared/subsink";
import {
  DeleteProject,
  GetProjectDetail,
  GetProjectList,
} from "../store/actions/project-listing.actions";
import {
  selectProjectDetail,
  selectProjectList,
} from "../store/selectors/project-listing.selectors";
import { DMNs, Model } from "../../models/model.model";
import { MatDialog } from "@angular/material/dialog";
import { DeleteDailogComponent } from "../../shared/delete-dailog/delete-dailog.component";

@Component({
  selector: "app-project-listing",
  templateUrl: "./project-listing.component.html",
  styleUrls: ["./project-listing.component.scss"],
})
export class ProjectListingComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  subSink = new SubSink();
  currentIndex: number | undefined;
  currentDMNList: DMNs[] = [];
  showLoader = false;
  currentDate = new Date().toISOString();

  @ViewChild(MatSort) sort: MatSort | undefined;
  data: Project[] = [];
  projectData: Model[] | undefined;
  constructor(private store: Store<State>, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.store.dispatch(new GetProjectList());
  }

  ngAfterViewInit(): void {
    this.subSink.add(
      this.store.pipe(select(selectProjectList)).subscribe((data) => {
        if (data) {
          this.data = data;
        }
      })
    );
    this.store.pipe(select(selectProjectDetail)).subscribe((data) => {
      if (data && data.length > 0) {
        this.projectData = data;
        if (this.currentIndex !== undefined && this.showLoader) {
          this.showLoader = false;
          const model = data.find(
            (result) =>
              result.ProjectId === this.data[this.currentIndex!].projectName
          );
          if (model && model.DMNs.length > 0) {
            this.currentDMNList = model.DMNs;
          } else {
            this.currentDMNList = [];
            this.currentIndex = undefined;
          }
        }
      } else {
        this.projectData = [];
      }
    });
  }

  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

  getModels(projectName: string, index: number) {
    if (this.currentIndex === index) {
      this.currentIndex = undefined;
      this.currentDMNList = [];
      this.showLoader = false;
      return;
    }
    this.currentIndex = index;
    this.currentDMNList = [];
    if (this.projectData) {
      const i = this.projectData.findIndex(
        (project) => project.ProjectId === projectName
      );
      if (i > -1 && this.projectData[i].DMNs.length > 0) {
        this.currentDMNList = this.projectData[i].DMNs;
      } else if (i > -1 && this.projectData[i].DMNs.length === 0) {
        this.currentDMNList = [];
        this.currentIndex = undefined;
      } else {
        this.showLoader = true;
        this.store.dispatch(new GetProjectDetail(projectName));
      }
    }
  }

  delete(projectName : string) {
    const dailogRef =this.dialog.open(DeleteDailogComponent, {width: '672px'});
    dailogRef.afterClosed().subscribe(result => {
      if(result){
        this.store.dispatch(new DeleteProject(projectName));
      }
    });
  }

  openProject(item : DMNs) {
    
  }
}
