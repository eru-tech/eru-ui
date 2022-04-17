import { createSelector } from "@ngrx/store";
import { IAppState } from "../state/app.state";

export const appState = (state: any) => {
  return state ? state.projectListingModule : null;
};

export const selectproject = createSelector(
  appState,
  (state : IAppState) => {
    return state ? state.project : null;
  }
);


export const selectProjectList = createSelector(selectproject, (state) => {
  return state ? state.projectListing : null;
});

export const selectProjectDetail = createSelector(selectproject, (state) => {
  return state ? state.projectDetail : null;
});
