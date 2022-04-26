import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Project } from "../project-listing/models/project.model";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ProjectCreateService {
  constructor(private http: HttpClient) {}

  createProject(data : Project){
    this.http.post(environment.base_eru_rules_url + `store/${data.projectName}/save`, data)
  }
}
