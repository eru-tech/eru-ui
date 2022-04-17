import { ActionReducerMap } from "@ngrx/store";
import { IAppState } from "../state/app.state";
import { ProjectListingReducers } from "./project-listing.reducers";

export const projectListingReducer: ActionReducerMap<IAppState, any> = {
  project: ProjectListingReducers
};
