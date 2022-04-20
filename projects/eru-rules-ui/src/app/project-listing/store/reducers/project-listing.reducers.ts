import { Model } from "../../../models/model.model";
import {
  ProjectListActionType,
  ProjectListingActions,
} from "../actions/project-listing.actions";
import { initialProjectListingState } from "../state/app.state";

export function ProjectListingReducers(
  state = initialProjectListingState,
  action: ProjectListingActions
) {
  switch (action.type) {
    case ProjectListActionType.GetProjectListSuccess: {
      return {
        ...state,
        projectListing: action.payload,
      };
    }
    case ProjectListActionType.GetProjectDetailSuccess: {
      // const projectDetail = state.projectDetail.slice();
      // projectDetail.push(action.payload);
      const projectDetail : Model[]  = [
        {
          ProjectId: "MyProject",
          DMNs: [
            {
              dmnName: "Model 1",
              createdBy: "user 1",
              lastUpdateDate: "2022-04-16T13:44:40.036158495Z",
            },
            {
              dmnName: "Model 2",
              createdBy: "user 1",
              lastUpdateDate: "2022-04-16T13:44:40.036158495Z",
            }
          ],
        },
        {
          ProjectId: "MyProject1",
          DMNs: [
            {
              dmnName: "Model 3",
              createdBy: "user 1",
              lastUpdateDate: "2022-04-16T13:44:40.036158495Z",
            },
            {
              dmnName: "Model 4",
              createdBy: "user 1",
              lastUpdateDate: "2022-04-16T13:44:40.036158495Z",
            }
          ],
        },
        {
          ProjectId: "MyProject2",
          DMNs: [
            {
              dmnName: "Model 5",
              createdBy: "user 1",
              lastUpdateDate: "2022-04-16T13:44:40.036158495Z",
            },
            {
              dmnName: "Model 6",
              createdBy: "user 1",
              lastUpdateDate: "2022-04-16T13:44:40.036158495Z",
            }
          ],
        }
      ];
      return {
        ...state,
        projectDetail: projectDetail,
      };
    }
    case ProjectListActionType.DeleteProjectSuccess: {
      let projectListing = state.projectListing.slice();
      let projectDetail = state.projectDetail.slice();
      const listIndex = projectListing.findIndex(project => project.projectName === action.payload);
      const detailIndex = projectDetail.findIndex(project => project.ProjectId === action.payload)
      return {
        ...state,
        projectListing : projectListing.splice(listIndex, 1),
        projectDetail : projectDetail.splice(detailIndex, 1),
      }
    }
    default: {
      return state;
    }
  }
}
