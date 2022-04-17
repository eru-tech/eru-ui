import { Model } from "../../../models/model.model";
import { Project } from "../../models/project.model";

export interface IProjectListingState {
  projectListing: Project[];
  projectDetail: Model[];
}

export const initialProjectListingState: IProjectListingState = {
  projectListing: [],
  projectDetail: [],
};

export interface IAppState {
  project: IProjectListingState;
}

export const initialAppState: IAppState = {
  project: initialProjectListingState,
}

export function getInitialState(): IAppState {
    return initialAppState;
  }
  
