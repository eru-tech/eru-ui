import { Action } from "@ngrx/store";
import { Project } from "../../../project-listing/models/project.model";

export enum ProjectCreateActionTypes {
    ProjectCreate = '[Project Create] Project Create',
    ProjectCreateSuccess = '[Project Create] Project Create Success',
    ProjectCreateError = '[Project Create] Project Create Error'
}

export class ProjectCreate implements Action {
    public readonly type = ProjectCreateActionTypes.ProjectCreate;
    constructor(payload : Project[]) {}
}

export class ProjectCreateSuccess implements Action {
    public readonly type = ProjectCreateActionTypes.ProjectCreateSuccess;
    constructor(payload : any) {}
}

export class ProjectCreateError implements Action {
    public readonly type = ProjectCreateActionTypes.ProjectCreateError;
    constructor(payload : any) {}
}