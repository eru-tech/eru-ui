import { Action } from "@ngrx/store";
import { Model } from "../../../models/model.model";
import { Project } from "../../models/project.model";

export enum ProjectListActionType {
  GetProjectList = "[Project List] Get Project List",
  GetProjectListSuccess = "[Project List] Get Project List Success",
  GetProjectListError = "[Project List] Get Project List Error",
  GetProjectDetail = "[Project List] Get Project Detail",
  GetProjectDetailSuccess = "[Project List] Get Project Detail Success",
  GetProjectDetailError = "[Project List] Get Project Detail Error",
  DeleteProject = "[Project List] Delete Project",
  DeleteProjectSuccess = "[Project List] Delete Project Success",
  DeleteProjectError = "[Project List] Delete Project Error",
  CreateProject = "[Project List] Create Project",
  CreateProjectSuccess = "[Project List] Create Project Success",
  CreateProjectError = "[Project List] Create Project Error",
}

export class GetProjectList implements Action {
  public readonly type = ProjectListActionType.GetProjectList;
  constructor() {}
}

export class GetProjectListSuccess implements Action {
  public readonly type = ProjectListActionType.GetProjectListSuccess;
  constructor(public payload: Project[]) {}
}

export class GetProjectListError implements Action {
  public readonly type = ProjectListActionType.GetProjectListError;
  constructor(public payload: any) {}
}

export class GetProjectDetail implements Action {
  public readonly type = ProjectListActionType.GetProjectDetail;
  constructor(public payload: string) {}
}

export class GetProjectDetailSuccess implements Action {
  public readonly type = ProjectListActionType.GetProjectDetailSuccess;
  constructor(public payload: Model) {}
}

export class GetProjectDetailError implements Action {
  public readonly type = ProjectListActionType.GetProjectDetailError;
  constructor(public payload: any) {}
}

export class CreateProject implements Action {
  public readonly type = ProjectListActionType.CreateProject;
  constructor(public payload: Project) {}
}

export class CreateProjectSuccess implements Action {
  public readonly type = ProjectListActionType.CreateProjectSuccess;
  constructor(public payload: Project) {}
}

export class CreateProjectError implements Action {
  public readonly type = ProjectListActionType.CreateProjectError;
  constructor(public payload : any) {}
}

export type ProjectListingActions =
  | GetProjectList
  | GetProjectListSuccess
  | GetProjectListError
  | GetProjectDetail
  | GetProjectDetailSuccess
  | GetProjectDetailError;
