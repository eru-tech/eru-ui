import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { ProjectListingService } from "./../../project-listing.service";
import * as ProjectListingActions from "../actions/project-listing.actions";

@Injectable()
export class ProjectListingEffects {
  constructor(
    private actions$: Actions,
    private projectLisitngService: ProjectListingService
  ) {}

  getProjectList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProjectListingActions.ProjectListActionType.GetProjectList),
      mergeMap((action: ProjectListingActions.GetProjectList) => {
        this.projectLisitngService.showLoader(true);
        return this.projectLisitngService.getProjectList().pipe(
          map((res: any) => {
            this.projectLisitngService.showLoader(false);
            return new ProjectListingActions.GetProjectListSuccess(res.projects);
          }),
          catchError((err) => {
            this.projectLisitngService.showLoader(false);
            return of(new ProjectListingActions.GetProjectListError(err));
          })
        );
      })
    );
  });

  getProjectDetail$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProjectListingActions.ProjectListActionType.GetProjectDetail),
      mergeMap((action: ProjectListingActions.GetProjectDetail) => {
        this.projectLisitngService.showLoader(true);
        return this.projectLisitngService.getProjectDetail(action.payload).pipe(
          map((res: any) => {
            this.projectLisitngService.showLoader(false);
            return new ProjectListingActions.GetProjectDetailSuccess(res.project);
          }),
          catchError((err) => {
            this.projectLisitngService.showLoader(false);
            return of(new ProjectListingActions.GetProjectDetailError(err));
          })
        );
      })
    );
  });
}
