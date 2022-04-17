import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, of } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ProjectListingService {
  private isLoader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );

  constructor(private http: HttpClient) {}

  showLoader(bool = false) {
    this.isLoader.next(bool);
  }

  getProjectList() {
    // return of({
    //   projects: [
    //     {
    //       createdBy: "user 1",
    //       lastUpdateDate: "2022-04-16T13:44:40.036158495Z",
    //       projectName: "MyProject",
    //     },
    //     {
    //       createdBy: "Yash Mehta",
    //       lastUpdateDate: "2022-04-16T13:44:40.036158495Z",
    //       projectName: "MyProject1",
    //     },
    //     {
    //       createdBy: "Altaf Baradia",
    //       lastUpdateDate: "2022-04-16T13:44:40.036158495Z",
    //       projectName: "MyProject2",
    //     }
    //   ],
    // });
    return this.http.get(environment.base_eru_rules_url + "store/project/list");
  }

  getProjectDetail(projectName: string) {
    // return of({
    //   project: {
    //     ProjectId: "MyProject",
    //     DMNs: [
    //       {
    //         dmnName: "Model 1",
    //         createdBy: "user 1",
    //         lastUpdateDate: "2022-04-16T13:44:40.036158495Z",
    //       },
    //       {
    //         dmnName: "Model 2",
    //         createdBy: "user 1",
    //         lastUpdateDate: "2022-04-16T13:44:40.036158495Z",
    //       }
    //     ],
    //   },
    // });
    return this.http.get(
      environment.base_eru_rules_url + `store/${projectName}/config`
    );
  }

  deleteProject(projectName: string) {
    return this.http.delete(
      environment.base_eru_rules_url + `store/${projectName}/remove`
    );
  }
}
